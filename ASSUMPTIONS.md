# Assumptions

- The repository was empty, so implementation starts as a new Next.js 15 App Router project.
- Demo pages use representative seeded content until an agency connects a Supabase project and completes onboarding.
- Server routes use the Supabase service role only for operations that require cross-row webhook or background-job access; tenant identity must be checked before production data mutations.
- WhatsApp webhook app secrets are encrypted at rest; webhook account selection currently expects the configured account secret to be available to the verifier. Add ciphertext decryption through `ENCRYPTION_KEY` before live Meta onboarding.
- A conversation burst debounce and distributed per-phone outbound limiter are deployment requirements; the job schema is ready, but the scheduler handlers need to be wired before live traffic.
- Quote rounding rounds upward to the configured paise increment; child ages under 2 are infants, 2–5 are without bed, and 6+ are with bed.
- Rate card amounts are paise. Seed prices and tax values are DEMO placeholders only; agencies must validate taxes and every rate with their CA and suppliers.
- A price discount above the configured cap is flagged for owner approval; every quote still requires an agent to approve before customer delivery.
- Taxes are applied to the post-markup, post-discount taxable subtotal. Configure domestic GST and overseas TCS with the agency's CA.
- The public quote acceptance API creates a Razorpay Payment Link when credentials are configured; payment webhook reconciliation must be completed before real payments.
- The supplied evaluation target is zero detected currency or booking-claim leakage across the scripted smoke corpus; a larger 25-conversation model evaluation is still needed before production.
- Automated integration and browser end-to-end flows are not yet production-complete; only deterministic unit coverage is included in this delivery.
