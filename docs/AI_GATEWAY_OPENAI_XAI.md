# DoorSphere AI Gateway — OpenAI + xAI (Grok)

## Decision
DoorSphere will use a provider-independent AI gateway with OpenAI and xAI (Grok) as optional providers. Neither provider is mandatory. The gateway is disabled by default and makes no external API calls until the owner deliberately configures credentials, selects a model, reviews pricing/data terms and enables the feature.

## Architecture
1. User interface calls only a DoorSphere server endpoint; browser code never receives provider API keys.
2. The server validates the signed-in user, request size, locale, consent and rate limit.
3. A policy layer classifies the task and blocks or redirects high-risk requests.
4. A provider adapter selects OpenAI or xAI using server-only credentials. Both adapters implement a common internal interface so providers can be changed without changing marketplace features.
5. Output is checked for safety, provenance and allowed actions before returning to the user.
6. Usage metadata (provider, model, latency, token counts and outcome) may be logged with data minimisation. Do not log prompts containing health, legal, identity, payment or other sensitive information by default.

## Initial use cases
- General marketplace navigation and category discovery.
- Search query refinement over DoorSphere's own approved catalogue.
- Merchant assistance drafting descriptions, subject to human review.
- General customer support using approved DoorSphere help content.
- Learning/coaching discovery and study-plan assistance with clear non-guarantee language.
- Multilingual text assistance where supported.

## Restricted use cases
- Healthcare: AI must not diagnose, prescribe, determine treatment or replace a registered practitioner. Do not send identifiable patient records or medical documents to a model. Teleconsultation is a separate clinician-led workflow.
- Legal: AI may provide general educational information with jurisdiction/date caveats, but must not act as an advocate, provide case-specific representation or create an advocate-client relationship. No lead selling or paid lawyer ranking without legal review.
- Government: AI may explain and navigate verified official information, but may not impersonate an agency, submit applications, issue certificates or claim official status. Show source agency, official URL and last-checked date.
- Financial, insurance, employment and other high-impact decisions: no automated eligibility, ranking, rejection or decision-making. Human review and applicable law required.
- Emergency requests: show locally verified emergency contact guidance; never delay emergency help with chatbot dialogue.

## Provider configuration
Environment template variables:
- `DOORSPHERE_AI_ENABLED=false` (must remain false until explicitly enabled)
- `DOORSPHERE_AI_PRIMARY_PROVIDER=openai`
- `DOORSPHERE_AI_FALLBACK_PROVIDER=grok`
- `OPENAI_API_KEY`, `OPENAI_MODEL`
- `XAI_API_KEY`, `XAI_MODEL`

Keys are server-only secrets. Never use a `NEXT_PUBLIC_` prefix, commit real values, or paste keys into chat. Do not configure automatic fallback until both providers' data terms, pricing, retention and model availability are reviewed. Fallback can cause unexpected extra usage and costs.

## Cost controls before activation
- Default disabled; no provider API requests in preview.
- Per-user and global daily/monthly token budgets.
- Hard spend ceiling and fail-closed behaviour when reached.
- Request/token limits, timeout and concurrency caps.
- Admin kill switch and provider allowlist.
- No background, scheduled or autonomous model calls without separate approval.
- Use deterministic search/database queries before invoking a model.
- Display that AI output may be wrong and link to verified source information.
- Test with mocked adapters and synthetic data; no paid calls in CI.

## Privacy and governance
Review current provider terms, regional processing, retention, deletion, subprocessors and applicable Indian DPDP and other launch-country privacy laws before sending personal data. Minimise prompts; obtain clear notice/consent where required. Do not send government ID scans, payment credentials, patient records, confidential legal files or children's sensitive data to external AI providers in the initial release.

## Implementation status
Architecture and environment template are documented. No provider SDK has been installed, no API key has been configured, no external AI request has been made, no model has been selected, and no paid API usage has been activated. Runtime adapters, UI, authentication, rate limiting, logging controls and tests remain to be implemented and reviewed.
