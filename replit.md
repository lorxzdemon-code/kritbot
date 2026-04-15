# กฤษดา Bot

## Overview

Discord bot + web dashboard system named "กฤษดา" (Kritsada). Thai-speaking AI bot with dual brain (GPT-4o + Claude fallback), memory system, learning system, image analysis, and a web admin dashboard.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Discord**: discord.js v14
- **AI**: OpenAI (GPT-4o) + Anthropic Claude (via Replit AI Integrations)
- **Auth**: express-session + bcrypt
- **Build**: esbuild (CJS bundle)

## Features

### Discord Bot
- Dual AI system: GPT-4o primary, Claude fallback
- Thai slang personality (กู/มึง style)
- Channel state management (idle/active)
- Memory system (last 10 messages per channel)
- Learning system (/teach, /forget, /teachlist)
- Image analysis (OpenAI Vision + Claude Vision)
- Slash commands: /setup, /setname, /resetname, /help, /info, /teach, /forget, /teachlist, /stop

### Web Dashboard
- Home page at "/"
- Login/Register system with bcrypt
- Dashboard showing bot status, AI provider, uptime
- Admin panel to send messages as bot
- Default admin: admin/admin123

## Key Commands

- `pnpm --filter @workspace/api-server run dev` — run server + bot locally
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Environment Variables

- `DISCORD_TOKEN` — Discord bot token (secret)
- `CLIENT_ID` — Discord application client ID
- `SESSION_SECRET` — Express session secret
- `AI_INTEGRATIONS_OPENAI_BASE_URL` — Replit AI proxy for OpenAI
- `AI_INTEGRATIONS_OPENAI_API_KEY` — Replit AI proxy key for OpenAI
- `AI_INTEGRATIONS_ANTHROPIC_BASE_URL` — Replit AI proxy for Anthropic
- `AI_INTEGRATIONS_ANTHROPIC_API_KEY` — Replit AI proxy key for Anthropic

## Routes

- `GET /` — Home page (HTML)
- `GET /ping` — Health check returns "OK"
- `GET /api/status` — Bot status JSON
- `GET /api/login` — Login page
- `GET /api/dashboard` — Dashboard (requires auth)
- `POST /api/auth/login` — Login API
- `POST /api/auth/register` — Register API
- `POST /api/auth/logout` — Logout API
- `GET /api/auth/me` — Current user info
- `GET /api/admin/guilds` — List bot's guilds (admin only)
- `GET /api/admin/guilds/:id/channels` — List guild channels (admin only)
- `POST /api/admin/send-message` — Send message as bot (admin only)

## Project Structure

```
artifacts/api-server/src/
├── index.ts          # Entry point (Express + Discord bot startup)
├── app.ts            # Express app with all routes
├── ai/
│   ├── openai.ts     # OpenAI integration
│   ├── anthropic.ts  # Anthropic/Claude integration
│   └── dual.ts       # Dual brain logic with fallback
├── bot/
│   ├── client.ts     # Discord client setup & message handler
│   ├── commands.ts   # Slash commands registration & handlers
│   ├── personality.ts# Thai personality, bot names, system prompt
│   └── state.ts      # Channel state management (idle/active)
├── memory/
│   └── store.ts      # Per-channel message memory (last 10)
├── learning/
│   └── store.ts      # Teach/forget/fuzzy-match learning
├── website/
│   ├── auth.ts       # Login/register/logout routes
│   ├── admin.ts      # Admin panel routes
│   ├── dashboard.ts  # Status API route
│   └── pages.ts      # HTML pages (home, login, dashboard)
└── routes/
    ├── index.ts      # API router
    └── health.ts     # Health check
```
