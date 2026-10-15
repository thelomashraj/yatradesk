# Operations

## Add an agency

1. Create the Supabase project, copy its URL and public/service keys into the deployment environment, then run `pnpm db:migrate`.
2. Create the owner account through Supabase Auth and add the owner membership row for the new organization.
3. Finish agency branding, package and rate import, tax configuration, quiet hours, FAQ entries, and human handoff assignment.
4. Use sandbox mode to verify a sample enquiry, quote review, quote link, and stop request before connecting WhatsApp.

## Rotate keys

Rotate Supabase service role, Anthropic, Razorpay and Meta credentials in the provider console, update the Vercel environment, redeploy, then revoke the old key. Rotate `ENCRYPTION_KEY` only with a planned decrypt-and-re-encrypt migration for stored credentials.

## Read logs and health

Use Vercel structured route logs and Sentry errors. `/api/health` reports the database connection and queued job count. Avoid logging message bodies, customer phone numbers, or credentials.

## Failed jobs

Inspect queued, failed and dead records in `jobs`; read `last_error` and `attempts`, correct the provider/configuration issue, then reset only safe idempotent work to `queued`. Webhook events and job dedupe keys help avoid duplicate actions.

## Privacy requests

Export or soft-delete a contact through a membership-authorized admin workflow. Complete the purge after the agency retention period; retain only records required for accounting or legal reasons.
