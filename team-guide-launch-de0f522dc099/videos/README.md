# Guide videos

Short screen-recorded walkthroughs that play inline on the team rollout guide
(`guide/index.html`). **The guide works fully without them** — every video is a
"nice to have" on top of written steps that stand on their own. Each slot on the
page shows a placeholder card ("Video coming — this walkthrough works as written
below") until the matching file lands in this folder.

## How the swap works

On page load the guide runs `fetch(src, { method: 'HEAD' })` for each slot,
wrapped in `try/catch`. If the file exists (HTTP OK) the placeholder card is
replaced with a real `<video controls preload="metadata">`. If the file is
missing — or the page was opened straight from disk (`file://`, where the check
can't run) — the placeholder stays, silently. So: **drop the correctly-named
`.mp4` into this folder and the card upgrades itself. No HTML edit needed.**

## Expected files

| File | Slot | Title on card | Target length | Where it appears |
|---|---|---|---|---|
| `v1-ticket-to-ship.mp4` | V1 | Watch a ticket ship | ~3 min | Hero (top of the page) |
| `v2-update-machine.mp4` | V2 | Update your machine | ~2 min | "Get set up" section |
| `v3-skill-chaining.mp4` | V3 | How the skills chain | ~1.5 min (house style; was ~4 min) | `skills.html` (Task 6 — not on this page) |
| `v4-team-model.mp4` | V4 | The team model, walked through | ~2 min | `team.html` (Task — the team-model page) |
| `v5-two-tier-prs.mp4` | V5 | How a change ships | ~2 min | `journey.html` `#git-tickets` (Git & ClickUp section) |

> `v3-skill-chaining.mp4` and `v4-team-model.mp4` are listed here so the naming
> stays in one place, but their slots live on `skills.html` and `team.html`
> respectively, not `index.html`. `v5-two-tier-prs.mp4` lives on `journey.html`.

## Suggested content (per video)

Each placeholder card on the page now shows this shot list under "What this video
will show" — keep the recordings in sync with it (or update both together).

### V1 — Watch a ticket ship (~3 min, hero)
Audience: the whole team, first thing they see. Goal: "oh, that's all I do?"
1. **(0:00)** A real ClickUp ticket on screen — point at the ref (`FRC-814`), the
   acceptance criteria, the status `to-do`. "This is a ready ticket."
2. **(0:20)** Open a session, type *"work on FRC-814"*. Show the router announcing
   the stage it detected. No menu, no flags.
3. **(0:45)** Fast-forward (sped up 8–10×) through implement: tests running, the
   design gate verdict, local QA going green. Caption the gates as they pass.
4. **(1:50)** The draft PR opening — then cut to ClickUp: the status flips to `pr`
   by itself and the handoff comment lands. This is the money shot.
5. **(2:30)** The start-fresh prompt. "One stage per session — paste this into the
   next one." End card: `ticket-to-ship` is the only name to remember.

### V2 — Update your machine (~2 min, Get set up)
Audience: everyone, once. Goal: remove the fear of running a script.
1. **(0:00)** Finder/Explorer → opening a terminal *inside* the `ai-setup` folder
   (show the Mac right-click path; flash the Windows address-bar trick).
2. **(0:25)** `git pull`, then `bash bin/update.sh`.
3. **(0:45)** The scan report — pause on it. "It has not touched anything yet."
4. **(1:15)** Saying yes once; the apply summary at the end.
5. **(1:40)** What a SKIPPED line looks like + copying the output into the ClickUp
   rollout channel. End card: scan first, ask once, never destructive.

### V3 — How the skills chain (~1.5 min, skills.html)
Audience: graduates/engineers. Goal: show the loop is real, not marketing.
1. **(0:00)** The router reading ticket status + branch + open PR, and picking
   exactly one stage (show the artifacts-beat-status case if possible).
2. **(0:50)** One playbook file loading — and why the context stays small.
3. **(1:40)** A gate going green: status flip + handoff comment landing, live.
4. **(2:30)** The refusal: ask it to continue into the next stage on camera; it
   declines and explains the fresh-session rule.
5. **(3:10)** Paste the start-fresh prompt into a new session; it picks up exactly
   where the last one stopped. End card: the ticket is the source of truth.

### V4 — The team model, walked through (~2 min, team.html)
Audience: the whole team, once next week's brain update lands. Goal: "the brain
is a product I use and shape — nothing changes under me, nothing I can break."
Note: like V1–V3 this is a **placeholder**; no real `.mp4` needs to exist yet, and
the page reads fully without it. Frame it as a preview, matching the page.
1. **(0:00)** The read-only contract in one line — every laptop holds the same
   copy; the owner pushes, you pull. "There's nothing to break."
2. **(0:25)** Session start: the ask-first update prompt appears — the plain-language
   summary of what changed and **Apply? [yes/no]**. Point out nothing has downloaded
   yet; say yes once and it fast-forwards.
3. **(1:00)** Filing feedback: run `/brain-feedback`, watch the agent gather context
   and draft a GitHub issue on `pitchplatforms/ai-setup` — filed only on your yes.
   One line on the boundary: brain feedback → issues, product work → ClickUp.
4. **(1:35)** The weekly pulse box at session start — a 1–5 rating + one rotating
   question, with **Skip this week** / **Stop asking** shown up front. End card:
   under a minute, session-start only, never mid-task.

### V5 — How a change ships (~2 min, journey.html `#git-tickets`)
Audience: everyone who touches code or tickets. Goal: "my change rides my own
small PR — I can't break anything shared."
Note: like the others this starts as a **placeholder**; the slot on `journey.html`
upgrades itself the moment this file lands — no HTML edit. Captions only (house
rule; voiceover muxes in later).
1. **(0:00)** An author opens a small PR from their topic branch into the feature
   branch — cut to ClickUp: the ticket flips to `pr` the moment the PR opens.
2. **(0:30)** The feature owner reviews and squash-merges — one clean,
   ref-carrying commit lands on the feature branch.
3. **(1:00)** The integrator replays the feature onto the latest `staging` (the
   one `rebase --onto`, done once) and opens the single staging PR — merge
   commit, never squash.
4. **(1:30)** The safety gate parks a risky PR: it stays a draft, gets the
   `needs-engineer-integration` label, and an engineer takes over on GitHub —
   the handoff is the design, not a failure.
5. **(1:50)** End card: two hops — you drive the first, the integrator drives
   the second.

## Recording notes

- **Format:** `.mp4` (H.264 / AAC) — plays in every browser without a plugin.
- **Filename must match exactly** (lowercase, hyphens) or the swap won't find it.
- Keep them short and captioned; they mirror the written steps, they don't replace them.
- No transcript file is required — the on-page copy is the source of truth.
