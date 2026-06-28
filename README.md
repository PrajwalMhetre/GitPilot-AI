# GitPilot-AI

Production-ready AI-powered GitHub assistant built with FastAPI, Next.js, PostgreSQL, Redis, and modern AI models.

---

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* FastAPI
* SQLAlchemy
* Alembic

### Database

* PostgreSQL

### Cache

* Redis

### AI

* OpenAI
* Gemini
* Tavily

---

## Folder Structure

```text
apps/
packages/
docker/
docs/
scripts/
```

---

## Requirements

* Node.js 22+
* pnpm
* Python 3.12+
* Docker Desktop

---

## Installation

```bash
pnpm install
docker compose up -d
```

---

## Environment

Copy:

```bash
cp .env.example .env
```

Fill in all required API keys before running the application.

---

## Development

Backend:

```bash
cd apps/api
```

Frontend:

```bash
cd apps/web
```

---

## Docker

Start services:

```bash
docker compose up -d
```

Stop services:

```bash
docker compose down
```

---

## Branch Strategy

* main
* develop
* feature/*
* fix/*
* release/*

---

## License

MIT
