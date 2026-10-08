import Link from 'next/link'
import type { Category } from '@shared/types/category'

/**
 * Idev Affiliation category selector — elegant glass pills with an indigo→cyan
 * active state. Works on the home page (basePath="/") and the casinos listing.
 */
export default function CategoryNav({
  categories,
  selected,
  basePath = '/casinos',
}: {
  categories: Category[]
  selected: string
  basePath?: string
}) {
  return (
    <nav aria-label="Casino categories" className="flex flex-wrap gap-2.5">
      {categories.map((c) => {
        const active = c.slug === selected
        return (
          <Link
            key={c.id}
            // On the home page the nav is an in-page filter (basePath="/"), so it
            // keeps the query form. Anywhere else it links straight at the
            // canonical category route — never through the 301.
            href={basePath === '/' ? `/?category=${c.slug}` : `/categories/${c.slug}`}
            aria-current={active ? 'page' : undefined}
            // The active chip carries a TRANSPARENT border purely so its box model
            // matches the inactive ones, which are bordered. Without it the selected
            // chip is 2px shorter — invisible while chips share a row and are
            // stretched to match, obvious the moment they wrap to one per row.
            //
            // `bg-origin-border` is what that border costs. A gradient is sized to the
            // PADDING box but clipped to the BORDER box, and the leftover strip is
            // filled by the image repeating — so the 1px of border showed the tail of
            // the previous tile, i.e. the gradient's far end, as a dark hairline along
            // the edge of the selected chip. Sizing it to the border box leaves nothing
            // to repeat. This chip is the only bordered button on the site, which is
            // why no other gradient here shows the same line.
            className={`inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              active
                ? 'border border-transparent bg-origin-border bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30'
                : 'border border-slate-200 bg-white/70 text-slate-600 backdrop-blur hover:border-indigo-300 hover:text-indigo-700'
            }`}
          >
            {c.name}
            {typeof c.casinos_count === 'number' && (
              <span className={`ml-1.5 text-xs ${active ? 'text-cyan-100' : 'text-slate-400'}`}>{c.casinos_count}</span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
