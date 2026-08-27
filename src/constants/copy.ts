/**
 * All user-facing and SEO-facing wording for this site.
 *
 * The KEY STRUCTURE is identical across idevaffiliation, winpalack and
 * roulettingo — same groups, same keys, same order — so the three apps stay
 * interchangeable and a component written for one works on all of them.
 *
 * The WORDS are deliberately unique to this site. That is not decoration: the
 * three brands are separate domains serving the same catalogue, and if they
 * shipped the same titles, descriptions and headings, Google would treat them as
 * duplicate content and suppress all but one. Every string that reaches a
 * <title>, a meta description, an <h1>/<h2> or a JSON-LD field must therefore
 * read differently here than on the sibling sites.
 *
 * idevaffiliation's angle: the independent analyst — we test operators
 * end-to-end and publish what happened.
 */
export const COPY = {
  // SEO identity. These three reach the <title>, the meta description and the
  // keywords tag on EVERY page that does not set its own — which is most of
  // them — so they are the strings most likely to be read as duplicate content
  // if a sibling domain ships the same words. Kept here, beside the rest of this
  // site's wording, rather than inline in layout.tsx where they drifted into
  // being byte-identical with roulettingo.
  site: {
    titleTail: 'Independent Online Casino Reviews & Bonus Terms',
    description:
      'is an independent review desk: we open accounts, test the operators end to end and publish exactly what happened, bonus terms included.',
    keywords: [
      'independent casino reviews',
      'casino bonus terms explained',
      'tested casino payouts',
      'online casino comparison',
      'casino wagering requirements',
    ],
  },
  nav: {
    casinos: 'Casinos',
    specialOffers: 'Special Offers',
    categories: 'Categories',
  },
  home: {
    heroEyebrow: 'Independent Casino Analysis',
    // Split in two so the JSX keeps its gradient <span> while the words change.
    heroHeadline: 'Every casino we rate,',
    heroHighlight: 'tested end to end',
    heroSubtitle:
      'We open the account, claim the bonus and request a withdrawal ourselves — then publish exactly what happened.',
    topCasinosTitle: 'Highest-Rated Casinos',
    topCasinosSubtitle: 'Ranked by our review scores. Narrow them down by category.',
    featuredCasinos: 'Browse Reviews',
    specialOffers: 'See Bonus Offers',
    viewAll: 'See All',
    // Leads the home <title>; the year and brand are appended in page.tsx.
    homeTitle: 'Independent Casino Reviews',
    faqTitle: 'Questions we get asked',
    metaDescription:
      'Independent reviews of the online casinos worth your time — payout speed, bonus terms and support tested one operator at a time.',
  },
  casinos: {
    pageTitle: 'Online Casino Reviews',
    pageDescription:
      'In-depth reviews of licensed online casinos, scored on payout speed, bonus terms and the quality of their support.',
    // Meta-description fallback for a casino review page. Casino records are
    // GLOBAL master data shared by every site, so without a per-site line here
    // all four domains would ship the identical description for the same casino.
    // Short per-site tail appended to an ADMIN-ENTERED casino meta description.
    // Casino records are shared by every site, so without this the same
    // description would ship on all four domains the moment the field is filled.
    reviewSignature: 'Independently reviewed and rated.',
    reviewSummary: 'an independent review of payout speed, bonus terms and support, tested end to end.',
    visitCasino: 'Visit Casino',
    readReview: 'Read Full Review',
    rating: 'Review Score',
    noResults: 'No casinos match this filter yet.',
  },
  specialOffers: {
    pageTitle: 'Casino Bonus Offers',
    pageDescription:
      'Welcome bonuses and free-spin deals with the wagering requirements spelled out before you claim anything.',
    // Appended to an offer's (shared) bonus text so the four sites do not ship
    // an identical meta description for the same offer.
    offerMetaSuffix: 'Wagering terms checked and spelled out in full before you claim anything.',
    claim: 'Claim Offer',
    noResults: 'No offers are running right now.',
  },
  categories: {
    pageTitle: 'Casino Categories',
    pageDescription:
      'Find casinos by what actually matters to you — fast withdrawals, live dealer tables, low wagering and more.',
    // Meta-description tail for a single category page. Category records are
    // shared master data, so this is what keeps the four sites distinct there.
    categoryMetaSuffix: 'ranked by our review scores, with payout speed and bonus terms compared side by side.',
    noResults: 'No categories yet.',
  },
  newsletter: {
    title: 'Get new reviews first',
    subtitle: 'One email when we publish a review or find a bonus worth claiming.',
    placeholder: 'Enter your email',
    button: 'Subscribe',
    success: 'Thanks! Check your inbox to verify your email and activate your subscription.',
    error: 'Something went wrong. Please try again.',
  },
  footer: {
    // Short brand blurb in the footer, above the legal links.
    tagline:
      'An independent review desk. We test operators end to end and publish what happened — 18+.',
    // Registered postal address, shown beside the copyright line. A physical
    // address in the footer is what mailbox providers and the gambling
    // affiliate compliance checks both look for, and it must match the address
    // used in the email templates.
    postalAddress: '32 Stasikratous Street, Nicosia 1065, Cyprus',
    disclaimer:
      'Gambling carries real financial risk and is strictly for adults aged 18 and over. Play only what you can afford to lose. We may earn a commission when you sign up through a link on this site, which never affects how we score a casino.',
  },
  errors: {
    notFound: 'We could not find that page.',
    apiError: 'Failed to load content. Please try again later.',
  },
} as const
