# YatraDesk

WhatsApp-first sales workspace for Indian travel agencies. The repository includes a responsive dashboard, tenant-aware Supabase schema and RLS policies, deterministic INR pricing, Meta and Razorpay webhook entry points, quote sharing, job claiming, and a sandbox simulator.

## Requirements

- Node.js 20 or newer, pnpm, a Supabase project and Supabase CLI.
- Optional for live integrations: Anthropic, Meta WhatsApp Cloud API, Razorpay, Sentry and Vercel accounts.

## Run locally

```sh
cp .env.example .env.local
pnpm install
pnpm db:migrate
pnpm seed
pnpm dev
pnpm test
```

Set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` before running migrations or seed. To run the migration from local Supabase, first use `supabase link --project-ref <ref>`; for a local stack run `supabase start` and then `supabase db push`. The service role key is server-only. Set `ENABLE_SIMULATOR=true` to use `/dev/simulator` in development.

## Configure integrations

Set `ANTHROPIC_API_KEY`, `AGENT_MODEL`, `CLASSIFIER_MODEL`, `ENCRYPTION_KEY` (32 random bytes encoded as hex), `CRON_SECRET`, `APP_URL`, and `SENTRY_DSN`. Set the Razorpay API and webhook secrets for payments. Store each organization's WhatsApp Cloud API credentials in the encrypted account settings; configure the Meta callback as `/api/webhooks/whatsapp` and subscribe to messages and message statuses. Configure the Razorpay webhook at `/api/webhooks/razorpay`.

## Data and security

SQL migrations live in `/supabase/migrations`. Tenant tables enforce membership RLS. Public quotes are retrieved by unguessable share token through a server route and never via browser Supabase access. Demo price and tax values are clearly placeholders and must be replaced and checked by an agency's CA. Never use demo rates for customer quotes.

## Validation

`pnpm typecheck`, `pnpm lint`, and `pnpm test` are available. Vitest covers pricing math, signature verification, opt-out detection, output filtering, WhatsApp windows, and retry behavior. The broader RLS, integration, Playwright, and model evaluation suites are planned but are not complete in this initial implementation; see `ASSUMPTIONS.md`.

## Deployment

Deploy on Vercel with the environment variables above. `vercel.json` schedules `/api/cron/jobs` once per minute; set `CRON_SECRET` and configure it in Vercel. Apply Supabase migrations before deploying the routes. See [OPERATIONS.md](OPERATIONS.md) for onboarding and incident steps.

## Human setup still required

Create and verify a Meta developer app and dedicated WhatsApp number, submit the six seeded message template drafts, create Razorpay/Anthropic/Supabase/Vercel/Sentry accounts and keys, and load verified agency packages, supplier rates, GST/TCS, cancellation policy and FAQs.
