# Telemetry Doesn't Have to Be Painful

At Indeed, I spent years building observability at scale with Datadog. Monitors, dashboards, SLOs, log pipelines, the whole lot. I know the platform inside out. But if you asked me to set it all up again from scratch, I would groan. Not because the concepts are hard, but because the implementation is tedious. Clicking through UIs, copy-pasting JSON, manually wiring up alert channels. It is soul-crushing work.

Then I discovered what happens when you combine Terraform with Claude Code. And honestly, it has changed how I think about telemetry entirely.

## The Golden Signals

Before I get into the tooling, let me set the stage. Google's SRE handbook defines four golden signals:

1. Latency. How long does it take to serve a request?
2. Traffic. How much demand is hitting your system?
3. Errors. What fraction of requests are failing?
4. Saturation. How close are you to capacity?

Here is the thing most people miss: these signals are universal. They do not belong to Datadog. They do not belong to Grafana or New Relic or Prometheus. They are concepts. Patterns. The vendor is just the implementation detail.

And that is exactly why Terraform changes the game.

## Rethinking Queues: A Lesson From Principal Engineers

At Indeed, I was lucky enough to work alongside some seriously sharp principal engineers. One conversation in particular reshaped how I thought about background job architecture entirely.

We had the typical Sidekiq setup that most teams end up with. Queues named after intent: `urgent`, `auxiliary`, `default`, `mailers`, `reports`. It felt logical at the time. Urgent stuff goes in the urgent queue, less important stuff goes in auxiliary. Simple.

But here is the problem. What does "urgent" actually mean? Urgent to whom? A job that is urgent today might not be urgent next quarter. A queue called `auxiliary` becomes a dumping ground for anything that does not fit elsewhere. And before you know it, you have fifteen named queues, half of them with overlapping purposes, and nobody can tell you why a particular job lives where it does.

The principal engineers pushed a different mental model: build your queues around latency targets, not intent.

Instead of asking "how important is this job?", ask "how quickly does this job need to start processing?" That reframes the entire conversation. You end up with queues like:

- A queue with a 5-second latency target, for jobs that need near-immediate processing
- A queue with a 30-second latency target, for jobs where a short delay is acceptable
- A queue with a 5-minute latency target, for jobs that can wait

```
┌─────────────────────────────────────────────────────┐
│              Latency-Based Queue Model              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌───────────┐  Target: < 5s    ┌──────────────┐    │
│  │  Jobs In  │ ───────────────► │  5s Queue    │    │
│  └───────────┘                  │  (8 workers) │    │
│                                 └──────────────┘    │
│  ┌───────────┐  Target: < 30s   ┌──────────────┐    │
│  │  Jobs In  │ ───────────────► │  30s Queue   │    │
│  └───────────┘                  │  (4 workers) │    │
│                                 └──────────────┘    │
│  ┌───────────┐  Target: < 5m    ┌──────────────┐    │
│  │  Jobs In  │ ───────────────► │  5m Queue    │    │
│  └───────────┘                  │  (2 workers) │    │
│                                 └──────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

The beauty of this approach is that it is measurable. You can set an SLO on each queue: 99% of jobs in the 5-second queue should begin processing within 5 seconds. If that SLO is breached, you know exactly what happened and exactly what to fix. You either have too many jobs or not enough workers. There is no ambiguity.

Compare that to a queue called `urgent` with no defined latency target. When it backs up, what do you do? How do you know if the delay is acceptable or not? You do not. You guess. And guessing in production is how incidents happen.

This shift in thinking was one of the most valuable lessons I picked up at Indeed. It sounds simple, but it fundamentally changed how I designed background job systems from that point on.

## The Sidekiq Observability Problem

Once you have latency-based queues, the golden signals map perfectly:

- Latency. How long has the oldest job been sitting in the queue? This is your primary signal. If your 5-second queue has a job that has been waiting 20 seconds, you have a problem.
- Traffic. How many jobs are being enqueued per second? A sudden spike means something changed upstream.
- Errors. How many jobs are failing and landing in the retry or dead queue?
- Saturation. How many workers are busy versus available? If you are at 100% utilisation, new jobs are just piling up.

In Datadog, setting this up means creating monitors, building dashboard widgets, configuring downtime rules, and setting up notification channels. Multiply that across ten services and you have lost a week. And the worst part? None of it is version-controlled. None of it is reviewable. It lives in a UI somewhere, and when someone accidentally deletes a monitor at 3am, good luck figuring out what it looked like before.

## Terraform: Observability as Code

This is where Terraform comes in. Instead of clicking through Datadog's UI, you define your monitors, dashboards, and SLOs as code:

```hcl
resource "datadog_monitor" "sidekiq_queue_latency" {
  name    = "Sidekiq Queue Latency - Critical"
  type    = "metric alert"
  message = "Queue latency has exceeded threshold. @slack-oncall"
  query   = "avg(last_5m):avg:sidekiq.queue.latency{environment:production} > 300"

  thresholds {
    critical = 300
    warning  = 120
  }
}
```

Now your telemetry is version-controlled. It goes through pull requests. It is reviewable. It is reproducible. Spin up a new environment? `terraform apply` and your entire observability stack comes with it.

Terraform is also vendor-agnostic. The golden signals stay the same. The concepts do not change. If tomorrow you move from Datadog to Grafana Cloud, the thinking is identical, only the provider block changes. Your mental model transfers. Your patterns transfer. The vendor is just a plug-in.

## Enter Claude Code

Here is where it gets interesting. I gave Claude Code context about our Sidekiq setup and asked it to generate the Terraform for our observability stack.

What would have taken me a day of writing HCL, cross-referencing Datadog's Terraform provider docs, and testing threshold values, Claude Code did in minutes. Not just boilerplate either. It understood the nuances. It knew to use percentile-based latency checks rather than averages. It set up composite monitors that correlate queue depth with error rates. It even suggested SLO definitions tied to the golden signals.

The real value was not the speed though. It was the conversation.

I said: "I want to monitor Sidekiq queues using golden signals." Claude Code did not just dump Terraform. It asked the right questions. What are your SLA targets? Which queues are critical versus best-effort? Do you want to alert on sustained degradation or immediate spikes? It thought about the problem the way a senior SRE would.

And because Terraform is declarative, I could review every line. I was not trusting a black box. I could see exactly what monitors it was creating, what thresholds it was setting, what alert channels it was wiring up. Review it. Tweak it. Ship it.

## Rolling This Out System-Wide

Once you have a solid Terraform module for Sidekiq observability, you can roll it out across every service in your organisation. That is the point. This is not a one-off exercise for a single team.

Wrap your monitors, dashboards, and SLOs into a reusable Terraform module. Teams just plug in their service name and their latency targets:

```hcl
module "payments_sidekiq_observability" {
  source         = "./modules/sidekiq-observability"
  service_name   = "payments"
  environment    = "production"
  queue_configs  = {
    "5s"  = { latency_target = 5,   workers = 8 }
    "30s" = { latency_target = 30,  workers = 4 }
    "5m"  = { latency_target = 300, workers = 2 }
  }
  alert_channel  = "slack-payments-oncall"
}
```

Three lines of configuration and a team gets a full observability stack. Latency monitors for each queue, an error rate dashboard, saturation alerts, and SLO tracking. No Datadog expertise required. No clicking through UIs. No guessing what thresholds to set.

This is where the real organisational value lands. The subtle things that are hard to catch: a queue slowly degrading over weeks, an error rate creeping up but not yet alarming, a worker pool gradually saturating as traffic grows. These are the problems that slip through when observability is manual and inconsistent across teams. When every service has the same baseline monitoring from day one, you catch drift early. You spot patterns across services. You stop firefighting and start engineering.

```
┌──────────────────────────────────────────────────────────────┐
│                  System-Wide Observability                   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ Payments │  │ Search   │  │ Comms    │  │ Reports  │      │
│  │ Service  │  │ Service  │  │ Service  │  │ Service  │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘      │
│       │             │             │             │            │
│       ▼             ▼             ▼             ▼            │
│  ┌───────────────────────────────────────────────────────┐   │
│  │          Shared Terraform Module                      │   │
│  │   (monitors + dashboards + SLOs per service)          │   │
│  └───────────────────────┬───────────────────────────────┘   │
│                          │                                   │
│                          ▼                                   │
│  ┌───────────────────────────────────────────────────────┐   │
│  │                    Datadog                            │   │
│  │  ┌─────────┐  ┌──────────┐  ┌──────┐  ┌──────────┐    │   │
│  │  │Monitors │  │Dashboards│  │ SLOs │  │  Alerts  │    │   │
│  │  └─────────┘  └──────────┘  └──────┘  └──────────┘    │   │
│  └───────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Claude Code can generate the entire module for you. Give it context about your stack and say "I need a reusable Terraform module for Sidekiq observability that any team can adopt." It will scaffold the module, the variables, the outputs, the documentation. You review it, refine it, and ship it. What would normally be a multi-sprint platform engineering initiative becomes a pull request.

## The Vendor-Agnostic Mindset

If I could give one piece of advice to engineers starting out with telemetry, it would be this: learn the concepts, not the tools.

Golden signals will outlast Datadog. They will outlast Grafana. They will outlast whatever the next shiny observability platform is. If you understand what to measure and why, the tooling becomes interchangeable. Terraform makes that literally true. Swap a provider, keep the logic.

Claude Code reinforces this because it thinks in concepts. When I ask it about queue latency monitoring, it does not think in Datadog-specific terms. It thinks about the problem, then translates to whatever provider I need. That is the mindset you want to develop.

## Getting Started

If you are new to this, here is what I would suggest:

1. Learn the golden signals. Read the [Google SRE chapter on monitoring](https://sre.google/sre-book/monitoring-distributed-systems/). It is free and it is gold.
2. Rethink your queues. If you have queues named after intent, consider whether latency-based queues would serve you better. Define what "fast enough" means for each type of work.
3. Write it in Terraform. Even if it takes longer the first time, you will thank yourself later. Your observability becomes portable, reviewable, and reproducible.
4. Make it reusable. Build a module that any team can adopt with minimal configuration. The goal is consistent observability across your entire system, not heroics from individual teams.
5. Use Claude Code to accelerate. Give it context about your stack and ask it to generate the Terraform. Review what it produces. Learn from it. Challenge it.

Telemetry is not glamorous. But it is the difference between firefighting and engineering. And with Terraform and Claude Code, the barrier to doing it right has never been lower.

---

The best time to set up observability was before your last incident. The second best time is now, in code, not in a UI.
