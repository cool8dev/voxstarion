/* VoxStarion site configuration — OWNER: fill these in before launch.
 *
 * How to use:
 *  1. Replace each "" value below with the real value.
 *  2. Leave a value as "" to keep its "forthcoming / to be configured"
 *     placeholder visible on the site instead of a broken link.
 *  3. Do NOT commit real private emails to a public repo if the repo
 *     itself is public and you prefer privacy — but the contact page
 *     needs a real public support address before Google Play review.
 */

window.VOXSTARION_CONFIG = {
  // Public support/contact email shown on contact.html
  contactEmail: "support@voxstarion.my.id",

  // Email for privacy-related requests (may be the same as contactEmail)
  privacyEmail: "support@voxstarion.my.id",

  // Public site domain, e.g. "https://voxstarion.com" (no trailing slash)
  siteDomain: "https://voxstarion.my.id",

  // Google Play developer profile URL (only when verified)
  googlePlayDeveloperUrl: "",

  // Per-game data. status: "In Testing" | "In Development" | "Coming Soon"
  // googlePlayUrl: full store listing URL, or "" to show status badge only.
  games: [
    { name: "Letter Rain", status: "In Testing", googlePlayUrl: "" },
    { name: "Letter Snake", status: "In Development", googlePlayUrl: "" },
    { name: "Sketch Squadron", status: "In Development", googlePlayUrl: "" },
  ],
};
