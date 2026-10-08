# IBADAN LIFE — Infrastructure

How the game runs in development and production.

## Local development

```bash
# Backend + PostgreSQL
docker compose -f infra/docker/docker-compose.yml up --build
```

Backend at `http://localhost:3000`, Postgres at `localhost:5432`.

Without Docker, the backend runs on Node's built-in SQLite (no server needed):

```bash
cd backend && npm install && npm run dev
```

## Production (Kubernetes)

- **Backend services** — `infra/kubernetes/backend-deployment.yaml`
  (stateless API + ledger; scales horizontally; Postgres for persistence).
- **Dedicated game servers** — the authoritative UE5 servers run as Linux
  containers on Kubernetes (see `05_TECHNICAL/NETWORK_ARCHITECTURE.md` and
  `06_MULTIPLAYER/WORLD_INSTANCING_STRATEGY.md`). They are built from the UE5
  project and orchestrated per district instance.

## Secrets

Never commit secrets. Production secrets (database URL, JWT secret, admin token)
live in a Kubernetes `Secret` named `ibadan-life-secrets`. See
`backend/.env.example` for the full list.

## Unreal Engine build CI

The UE5 client/server **cannot be compiled on a standard GitHub-hosted runner**
(it needs the full engine + an Epic login). UE5 build CI requires a
**self-hosted runner** with Unreal Engine installed. The backend and docs CI
run on GitHub-hosted runners (`.github/workflows/`).
