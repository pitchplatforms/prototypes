# Corporate Actions — Share Buyback (full journey mock)

A **clickable UI mock** of the complete Corporate Actions "Share Buyback" flow — the admin/superadmin
setup, the investor vote, and the admin/superadmin outcome — built for the **CTO + QA sharing**. It
walks through the journey we shipped & verified (issues #6/#7/#8/#19/#20) without booting the full stack.

Every screen carries a **plain-language explainer** at the top (with a role chip — Investor / Admin /
Superadmin) so a non-technical viewer can follow what's happening and who is acting.

## The 11 steps

**Setup (back office — two-person "maker–checker" rule)**
1. **Admin — create the buyback** — picks the company, voting dates, type = *Share buyback*, internal note.
2. **Admin — upload the voter list** — uploads the eligible investors; every row is checked against the registry, then submitted for approval.
3. **Superadmin — approve the setup** — a different person approves before voting can open.

**Investor vote (customer app)**
4. **"Your vote is needed"** — the reminder that pops up each login until they vote.
5. **Review the buyback** — holdings, buyback price, and the payout if it goes ahead.
6. **Confirm the vote** — final, can't-be-changed confirmation.
7. **Vote recorded** — the recorded-vote state.

**Outcome (back office — maker–checker again)**
8. **Admin — tally & propose result** — reviews the vote tally and proposes *Approved*.
9. **Superadmin — publish the result** — reviews the proposal and publishes the official outcome.

**Investor sees the result (customer app)**
10. **Outcome published** — the official result + payout on the offer page.
11. **Company Announcements tab** — the result also shows on the company's page.

Navigate with the floating bar at the bottom (Back / Next / dots / restart), the in-screen buttons,
or the ← / → arrow keys.

## How to run

Single self-contained `index.html` — **just open it in a browser** (double-click), or:

```bash
python3 -m http.server 4321 --directory docs/sharing/corporate-action-voting-mock
# then visit http://localhost:4321
```

## Important: this reuses the REAL UI

Not invented design. Every screen reproduces the actual Angular components — same DOM structure, CSS
class names, hex colours and typography:

| Mock screen | Real component |
|---|---|
| "Your vote is needed" popup | customer · `shared/components/pending-vote-modal/` |
| Voting detail + confirm modal | customer · `pages/mysec/corporate-action-detail/` (+ `confirm-vote/`) |
| Company page header + tabs | customer · `pages/mysec/businesses/market-details/` |
| Announcements feed | customer · `.../market-details/announcement/` |
| Create wizard (details / upload voters) | admin · `pages/corporate-actions/corporate-actions-form/` |
| Manage · tally · propose outcome | admin · `pages/corporate-actions/corporate-actions-detail/` |
| Superadmin approve + publish | admin · `pages/corporate-actions-approval/...` |

UI only — no backend, no real votes/approvals. Data is illustrative (Agroz Group, RM 2.40/share).
The live screens already exist in the apps and can be screenshotted from the running stack if a
pixel-exact reference is needed.

> Throwaway artifact for the sharing — safe to delete afterwards. Not production code; lives in the
> workspace (the "brain"), never committed into a product repo.
