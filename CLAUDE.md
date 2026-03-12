# ZZZ Accounting Guidelines

> Demo website for a fictional accounting firm inspired by "The Accountant" (2016).
> TypeScript + Next.js. Dark, clean, professional aesthetic with subtle hints at the unconventional.

## Tech Stack

- **Runtime:** Bun
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Package Manager:** Bun

## Git Workflow

**CRITICAL: Always create feature branches BEFORE starting work.**

### Branch Naming Convention (3 numbered categories for spec-kit compatibility)

| Range | Purpose | Example |
|-------|---------|---------|
| `0xx-name` | Features (spec-kit workflow) | `010-landing-page` |
| `3xx-name` | Fixes and polish | `300-ui-polish` |
| `5xx-name` | Research & POCs (never merge) | `500-experiment` |

### Rules
- Never delete branches (preserve history)
- Never commit directly to main
- Always rebase before merge (ensures linear history)
- Fast-forward merges only (no merge commits)

### Complete Workflow

```bash
# 1. Create feature branch FIRST
git checkout main && git pull
git checkout -b NNN-feature-name

# 2. Make changes, commit
git add <files>
git commit -m "feat: description"

# 3. When ready to merge - rebase first
git fetch origin
git rebase origin/main
# (resolve conflicts if any)

# 4. Merge to main (fast-forward only)
git checkout main && git pull
git merge NNN-feature-name --ff-only

# 5. Push
git push origin main

# 6. Return to feature branch for continued work
git checkout NNN-feature-name
```

**Key:** `--ff-only` fails if merge would create a merge commit. If it fails, rebase your feature branch first.

## Deployment

Deploy via the service-dashboard API. Requires `service-dashboard.yaml` in the project root (auto-scaffolded on first deploy if missing). The API handles ports, process management, registry, health checks, and TLS.

**Dev deploy** (Bun native, replaces any running instance):
```bash
curl -s -X POST https://the-commons.taila8bee6.ts.net:8000/api/deploy \
  -H "Content-Type: application/json" \
  -d '{"project": "/home/isecadmin/local/projects/zzz-accounting", "mode": "dev"}' | jq .
```

**Prod deploy** (Docker, returns immediately — poll for completion):
```bash
curl -s -X POST https://the-commons.taila8bee6.ts.net:8000/api/deploy \
  -H "Content-Type: application/json" \
  -d '{"project": "/home/isecadmin/local/projects/zzz-accounting", "mode": "prod"}' | jq .
# Poll: curl -s https://the-commons.taila8bee6.ts.net:8000/api/deploy/status/DEPLOY_ID | jq .
```

**Response:** `{"status": "running", "url": "https://..."}` on success, `{"status": "failed", "error": "..."}` on failure.
**Idempotent:** Calling deploy on an already-running service kills and replaces it.
**Verify:** `curl -sk -o /dev/null -w "%{http_code}" <url-from-response>` — expect 200.
**Discover:** `curl -s https://the-commons.taila8bee6.ts.net:8000/api/deploy/help` — returns current instructions.

## Key Decisions

- **Stack:** Next.js 15 + Bun + Tailwind v4 + shadcn/ui (default PAI web stack)
- **Concept:** Fictional accounting firm inspired by "The Accountant" — professional surface, unconventional depth
