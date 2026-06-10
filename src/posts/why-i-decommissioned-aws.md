# Why I Decommissioned AWS and Moved to Railway

I just ran `terraform destroy` on my entire AWS infrastructure. VPC, ECS, RDS, ElastiCache, S3 buckets, ECR, IAM roles. 67 resources, gone in about ten minutes. And honestly, it felt great.

This is not an anti-AWS post. AWS is incredible. I have used it professionally for years and it does everything. That is precisely the problem when you are a solo developer.

## The Cost Creep

Here is what nobody tells you about AWS as a solo founder. The bill looks free at first. AWS gave me $120 in credits when I signed up. A $100 free tier credit and a $20 RDS exploration credit. Ten days. I signed up on May 31st and ran the stack for ten days.

```
┌─────────────────────────────────────────────────────┐
│              AWS Credits After 10 Days              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Credits Issued         $120.00                     │
│  Actual Spend             $0.96                     │
│  Estimated Usage        $36.03   ← 10 days.         │
│  Credits Remaining     $119.04                      │
│                                                     │
│  Projected Monthly     ~$80-100                     │
│  Projected Yearly     ~$960-1200                    │
│                                                     │
│  For a side project with zero paying users.         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

The credits were masking the real burn rate. $36 in estimated usage in ten days. Extrapolate that and you are looking at somewhere between 80 and 100 dollars a month once the credits expire.

For a side project. For something with no paying users yet.

The NAT gateway alone costs roughly 30 dollars a month just to exist. Not to transfer data. Just to sit there, waiting for packets that never come. That is the AWS tax. You pay for infrastructure primitives whether you use them or not.

```
┌─────────────────────────────────────────────────────┐
│         Where the Money Goes (Monthly)              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  NAT Gateway          ~$30    ██████████████████    │
│  ECS Fargate          ~$25    ███████████████       │
│  RDS (t3.micro)       ~$15    █████████             │
│  ALB                  ~$15    █████████             │
│  ElastiCache          ~$10    ██████                │
│  S3 / ECR / Other      ~$5    ███                   │
│                       ─────                         │
│  Total               ~$100                          │
│                                                     │
│  NAT Gateway: 30% of the bill for doing nothing.    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## The Complexity Tax

Cost was not even the real problem. The complexity was.

This is what it takes to deploy a single Rails app on AWS:

```
┌─────────────────────────────────────────────────────────────────┐
│                    AWS Architecture (67 resources)              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─── VPC ────────────────────────────────────────────────┐     │
│  │                                                        │     │
│  │  ┌─ Public Subnet AZ-1  ─┐  ┌─ Public Subnet AZ-2  ─┐  │     │
│  │  │  ALB                  │  │                       │  │     │
│  │  │  Internet Gateway     │  │                       │  │     │
│  │  └───────────────────────┘  └───────────────────────┘  │     │
│  │                                                        │     │
│  │  ┌─ Private Subnet AZ-1  ┐  ┌─ Private Subnet AZ-2  ┐  │     │
│  │  │  ECS Fargate          │  │  ECS Fargate          │  │     │
│  │  │  NAT Gateway ($30/mo) │  │                       │  │     │
│  │  └───────────────────────┘  └───────────────────────┘  │     │
│  │                                                        │     │
│  │  ┌─ Data Layer ──────────────────────────────────────┐ │     │
│  │  │  RDS PostgreSQL    ElastiCache Redis              │ │     │
│  │  │  DB Subnet Group   Cache Subnet Group             │ │     │
│  │  └───────────────────────────────────────────────────┘ │     │
│  └────────────────────────────────────────────────────────┘     │
│                                                                 │
│  + ECR Repository          + IAM Roles (execution + task)       │
│  + Security Groups (x4)    + SSM Parameters (x6)                │
│  + Route Tables (x2)       + CloudWatch Log Group               │
│  + S3 Buckets (x4)         + Auto-scaling Policy                │
│  + SES Domain + DKIM       + Target Group + Listener            │
│                                                                 │
│  67 Terraform resources. More infra code than app code.         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Compare that to Railway:

```
┌─────────────────────────────────────────────────────────────────┐
│                   Railway Architecture (15 resources)           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌─────────────┐    ┌──────────────────┐    │
│  │  Web Service │───►│  PostgreSQL │    │  Custom Domain   │    │
│  │  (from repo) │    │  (managed)  │    │  staffos.raj...  │    │
│  └──────────────┘    └─────────────┘    └──────────────────┘    │
│                                                                 │
│  + Environment variables (x6)                                   │
│  + Cloudflare CNAME record                                      │
│  + SSL handled automatically                                    │
│  + Auto-deploy on git push                                      │
│                                                                 │
│  15 Terraform resources. Fits on one screen.                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

I had more infrastructure code than application code on AWS. On Railway, the entire Terraform config is shorter than my README.

## What I Actually Need

As a solo developer, my requirements are embarrassingly simple:

```
┌──────────────────────────────────┬──────────┬─────────┐
│ Requirement                      │   AWS    │ Railway │
├──────────────────────────────────┼──────────┼─────────┤
│ Run a Rails app                  │    ✓     │    ✓    │
│ Postgres database                │    ✓     │    ✓    │
│ Auto-deploy on push              │    ✓*    │    ✓    │
│ Custom domain + SSL              │    ✓*    │    ✓    │
│ Environment variables            │    ✓     │    ✓    │
├──────────────────────────────────┼──────────┼─────────┤
│ Terraform resources needed       │    67    │    15   │
│ Time to first deploy             │  ~2 hrs  │ ~5 min  │
│ Monthly cost (no credits)        │  ~$100   │  ~$5-10 │
│ Requires VPC knowledge           │    Yes   │    No   │
│ Requires IAM debugging           │    Yes   │    No   │
├──────────────────────────────────┼──────────┼─────────┤
│ * = requires significant setup   │          │         │
└──────────────────────────────────┴──────────┴─────────┘
```

I do not need multi-AZ redundancy. I do not need auto-scaling across three regions. I do not need a NAT gateway to let my private subnets reach the internet. I am not Netflix. I am one person building a product.

AWS is designed for companies that need five nines of uptime and compliance certifications. I need something that works and does not drain my bank account while I figure out if anyone actually wants what I am building.

## Why Railway

Railway is not the only option. Render and Fly.io are solid too. But Railway clicked for me because of how it thinks about deployment.

You connect a repo. You get a service. You add a Postgres database. It gives you a `DATABASE_URL`. You push code, it deploys. There is no VPC to configure. No security groups to debug. No IAM role that is missing one obscure permission.

The pricing is usage-based and transparent. I know exactly what I am paying for. No surprise NAT gateway charges. No data transfer fees that require a spreadsheet to predict.

And crucially, it has a Terraform provider. So I still get infrastructure as code. I still get reproducible deployments. I still get the ability to tear everything down and rebuild it with one command. I just do not need 60 resources to do it.

## The Terraform Destroy

Running `terraform destroy` on the AWS infrastructure was oddly satisfying. Watching 67 resources disappear one by one. The RDS instance deleting. The subnets draining. The VPC vanishing. Knowing that next month's bill would drop to zero.

```
$ terraform destroy -auto-approve

aws_ecs_service.app: Destroying...
aws_elasticache_cluster.redis: Destroying...
aws_lb_listener.http: Destroying...
...
module.rds.aws_db_instance.main: Still destroying... [5m elapsed]
module.rds.aws_db_instance.main: Destruction complete.
module.ecs.aws_vpc.main: Destruction complete.

Destroy complete! Resources: 67 destroyed.
```

The state file still sits in S3 as a historical record. If I ever need to go back to AWS, the Terraform is still in the repo. Nothing is lost except the monthly invoice.

## The Lesson

Build for where you are, not where you think you might be someday. AWS will be there when you need it. But if you are a solo developer or a small team trying to get something off the ground, you do not need it yet.

The best infrastructure is the one you do not think about. For me, right now, that is Railway.
