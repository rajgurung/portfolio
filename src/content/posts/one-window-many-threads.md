# One Window, Many Threads: Why I Built /board

I do most of my work inside one Claude Code session now. A bug fix, a new feature, a plan review, a blog post. All in the same window, often at the same time.

That was the problem. 😵

## 🧶 The mess

Claude is happy to juggle. I am not. A normal afternoon looked like this:

```
┌──────────────── one Claude session ────────────────┐
│                                                    │
│  me: fix the login bug                             │
│  agent: reviewing the threads plan...              │
│  me: also, bump the node version                   │
│  agent: tests passing on login-fix                 │
│  agent: waiting for your approval on ???           │
│  me: wait, which one is waiting?                   │
│                                                    │
└────────────────────────────────────────────────────┘
```

- 🔀 Several pieces of work, one scrolling conversation
- 🤖 Background agents finishing at random times
- ❓ No quick way to see what was waiting on me
- 📜 Scrolling back up to work out where each thing had got to

It got harder and harder to weed out what was actually going on. An answer would land and I'd have to stop and work out which piece of work it belonged to. The more I ran at once, the worse it got.

## 🪟 Why more windows didn't help

The obvious fix is one window per task. I tried it.

- 🧠 Each window only knows its own slice. Context gets split.
- 👀 I still can't see everything at once. I just have more tabs to check.
- 🔁 I spent my day switching windows to ask "are you done yet?"

More windows moved the mess around. It didn't remove it.

## 💡 The idea

Keep one session. Give every piece of work its own thread. Let agents run each thread in the background through a full development cycle. Show me all of it in one place.

Each thread moves through stages like these:

```
 Brief ──► Design ──► Plan ──► Build ──► Review ──► PR
   │                    │                  │
   └── me               └── staff          └── staff
                            engineer           reviewer
```

The stages fit the work. A small fix might skip Design. A big feature might add more. Agents do the stages. I only step in when something needs a decision.

## 📋 What it looks like

Above the prompt, one line per piece of work. Whatever needs me comes first.

![The board above the prompt: login-fix waiting for approval, threads in Build with a staff engineer running](/images/posts/board/band.svg)

Four symbols tell me everything at a glance:

- ◆ waiting on you. Claude needs a decision or an approval.
- ● running. Claude or its agents are working.
- ✓ done. The work is finished.
- ○ a note. A step that isn't an agent, like my approval or a review bot.

Type `/board` and the full view opens. Pick a piece of work on the left. On the right you see its stages, what happens next, every agent that has worked on it, notes, links, and the tokens it has used.

![The full /board view: the list of work on the left, and the threads work on the right with its stages, agents, notes and links](/images/posts/board/board.svg)

## ⚙️ How it works

There is nothing to set up. The plugin teaches Claude two habits, and the board reads what they produce.

```
 Claude ──writes──► .claude/loops/<id>.json ──┐
                                              ├──► board (checks every 2s)
 agents named "<id>: ..." ──start/finish──────┘
```

1. 📄 One file per piece of work. Claude keeps `.claude/loops/<id>.json` up to date with the title, stages, current stage, what's next, and the state.
2. 🏷️ Agent names start with the work's id. An agent called `threads: Review the plan` shows up under "threads".

That's it. You can also write or edit a loop file yourself, and the board shows whatever is there.

## 📈 What changed for me

- 🪟 One window again. No more hopping between sessions to check on things.
- 👀 One glance at the band tells me what needs me. I don't scroll back to find out.
- 🤖 Agents carry each thread through the full cycle in the background, from brief to PR.
- 🙋 I step in for decisions and approvals. The rest keeps moving without me.

I spend less time asking "where was I?" and more time on the parts that need a human.

## 🚧 Rough edges

- 🔢 Token totals look huge. Most of it is prompt cache reads, which are cheap. The board shows the cache share next to the total so it doesn't scare you.
- 🧵 Tokens from my main conversation aren't split between threads, because one chat often covers several of them. They show as their own line in the sidebar.
- 📝 The board is only as current as the loop files. Claude keeps them up to date, and when one drifts I can fix it by hand.

## 🚀 Try it

In a Claude Code session:

```
/plugin install agent-board --marketplace rajgurung/agent-board
```

Pick the user scope and the board shows up in every project. The code is on GitHub at [rajgurung/agent-board](https://github.com/rajgurung/agent-board).

One window. Many threads. Nothing waiting on me without me knowing. ✅
