/**
 * Frequently asked questions for this site.
 *
 * Rendered VISIBLY on the home page and emitted as FAQPage structured data from
 * this same array. Google requires the two to match; markup-only FAQ is a
 * guidelines violation, which is why the page maps over this constant rather
 * than duplicating the text.
 *
 * The wording is unique to this site: these answers are indexable page content,
 * and they are exactly the kind of text an answer engine quotes.
 */
export const FAQ_ITEMS = [
  {
    question: "How do you rate the casinos on this site?",
    answer:
      "We open an account, claim the advertised bonus and request a withdrawal ourselves, then score the operator on payout speed, the fairness of its bonus terms and how its support responds. The score is editorial and is not affected by commission.",
  },
  {
    question: "Do you earn money from these casinos?",
    answer:
      "Yes. We may earn a commission when someone signs up through a link on this site. It never changes a score or a ranking, an operator cannot pay to appear higher, and we still list operators we score poorly.",
  },
  {
    question: "How often are the reviews updated?",
    answer:
      "Each review is revisited when an operator changes its bonus terms, payment methods or withdrawal limits. The date of the last revision is published in the structured data on every review page.",
  },
  {
    question: "Are all the casinos listed here licensed?",
    answer:
      "We only list operators holding a licence from a recognised regulator. Where a licence is offshore or limited in scope, we say so in the review rather than leaving it out.",
  },
  {
    question: "What should I check before claiming a bonus?",
    answer:
      "Read the wagering requirement, the maximum cashout and which games contribute. A large headline bonus at 50x wagering is usually worth less than a smaller one at 20x.",
  },
] as const
