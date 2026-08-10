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
    metaDescription:
      'Independent reviews of the online casinos worth your time — payout speed, bonus terms and support tested one operator at a time.',
  },
  casinos: {
    pageTitle: 'Online Casino Reviews',
    pageDescription:
      'In-depth reviews of licensed online casinos, scored on payout speed, bonus terms and the quality of their support.',
    visitCasino: 'Visit Casino',
    readReview: 'Read Full Review',
    rating: 'Review Score',
    noResults: 'No casinos match this filter yet.',
  },
  specialOffers: {
    pageTitle: 'Casino Bonus Offers',
    pageDescription:
      'Welcome bonuses and free-spin deals with the wagering requirements spelled out before you claim anything.',
    claim: 'Claim Offer',
    noResults: 'No offers are running right now.',
  },
  categories: {
    pageTitle: 'Casino Categories',
    pageDescription:
      'Find casinos by what actually matters to you — fast withdrawals, live dealer tables, low wagering and more.',
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
    disclaimer:
      'Gambling carries real financial risk and is strictly for adults aged 18 and over. Play only what you can afford to lose. We may earn a commission when you sign up through a link on this site, which never affects how we score a casino.',
  },
  errors: {
    notFound: 'We could not find that page.',
    apiError: 'Failed to load content. Please try again later.',
  },
} as const
