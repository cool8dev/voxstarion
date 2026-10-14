# VoxStarion — Content Checklist (must resolve before release)

> **REVIEW BEFORE PUBLISHING.** Nothing below may be silently replaced with
> fabricated facts. Each item must be confirmed by the owner.

## Brand

- [ ] `brand_name`: VoxStarion — confirmed
- [ ] `tagline`: "Play Beyond. Learn Within." — confirmed

## Site & contact

- [ ] `site_domain`: `{{SITE_DOMAIN}}` — set in `assets/js/config.js` as `siteDomain`
- [ ] `contact_email`: `{{CONTACT_EMAIL}}` — set in `assets/js/config.js` as `contactEmail`
      (required before Google Play review; shown on contact.html)
- [ ] `privacy_contact_email`: `{{PRIVACY_EMAIL}}` — set as `privacyEmail`
      (may be the same address; label clearly if so)

## Legal

- [ ] `legal_entity_name`: `{{LEGAL_ENTITY_NAME_OR_INDIVIDUAL_DEVELOPER}}`
- [ ] `country_or_jurisdiction`: `{{JURISDICTION_TO_CONFIRM}}` (terms §10)
- [ ] `privacy_effective_date`: `{{DATE_TO_CONFIRM}}` (privacy.html header)
- [ ] `terms_effective_date`: `{{DATE_TO_CONFIRM}}` (terms.html header)
- [ ] Privacy policy verified against **actual** per-game SDK list and data practices
- [ ] Privacy policy consistent with Play Console **Data safety** declarations
- [ ] Terms reviewed (entity, jurisdiction, purchases §6 if paid features exist)

## Games

| Game | Status on site | Google Play URL |
|---|---|---|
| Letter Rain | In Testing (`{{CONFIRM_STATUS}}` — verify) | `{{OPTIONAL_VERIFIED_URL}}` — none yet; no button shown |
| Letter Snake | In Development | — (none; status badge only) |
| Sketch Squadron | In Development | — (none; status badge only) |

- [ ] Confirm each game's release status before changing any badge
- [ ] Add a Google Play button **only** with a real public listing URL
- [ ] `google_play_developer_url`: `{{OPTIONAL_VERIFIED_URL}}` — footer link omitted until supplied

## Per-game data practices (confirm for EACH game)

- [ ] `third_party_sdks_by_game`: `{{CONFIRM_PER_GAME}}` (AdMob, analytics, crash reporting…)
- [ ] `collected_data_by_game`: `{{CONFIRM_PER_GAME}}`
- [ ] `data_retention_and_deletion`: `{{CONFIRM}}` (incl. account-deletion path if accounts exist)
- [ ] `children_target_audience_by_game`: `{{CONFIRM_PER_GAME}}` (Families policy / COPPA / GDPR-K review)

## Pre-launch verification

- [ ] `npm run build` produces fresh `assets/css/style.css`; no Tailwind CDN in use
- [ ] All 5 pages load over HTTPS with stable public URLs
- [ ] Theme toggle works and persists; no flash on load/navigation
- [ ] Mobile menu opens/closes, `aria-expanded` correct, closes on link/Escape
- [ ] No `href="#"`, no fake emails, no invented store/social URLs
- [ ] No console errors; no horizontal scroll at 320px width
- [ ] Checked on Android Chrome + at least one desktop browser
