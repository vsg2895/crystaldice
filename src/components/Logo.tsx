import Link from 'next/link'

/**
 * iDev Affiliation brand logo.
 *
 * The SVG is inlined (not an <img>) so it renders instantly with no extra
 * request, scales crisply at any size, and inherits the current color context.
 * It is wrapped in a Next.js <Link> to the home page; the Link carries the
 * accessible name via aria-label, so the decorative artwork is aria-hidden to
 * avoid a duplicate announcement.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="iDev Affiliation home"
      className={`inline-flex shrink-0 items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${className}`.trim()}
    >
      <svg
        viewBox="0 0 680 260"
        className="h-9 w-auto sm:h-10"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(60,50)">
          <rect x="0" y="0" width="160" height="160" rx="44" fill="#2563EB" />
          <rect x="0" y="0" width="160" height="160" rx="44" fill="#3B82F6" opacity="0.35" />

          <line x1="52" y1="56" x2="108" y2="56" stroke="#DBEAFE" strokeWidth="10" strokeLinecap="round" />
          <line x1="52" y1="56" x2="52" y2="104" stroke="#DBEAFE" strokeWidth="10" strokeLinecap="round" />
          <line x1="52" y1="104" x2="108" y2="104" stroke="#DBEAFE" strokeWidth="10" strokeLinecap="round" />

          <circle cx="52" cy="56" r="17" fill="#FFFFFF" />
          <circle cx="108" cy="56" r="17" fill="#93C5FD" />
          <circle cx="52" cy="104" r="17" fill="#93C5FD" />
          <circle cx="108" cy="104" r="17" fill="#FFFFFF" />
        </g>

        <g transform="translate(250,0)">
          <text x="0" y="150" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="66" fontWeight="600" fill="#1E3A8A">iDev</text>
          <text x="163" y="150" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="66" fontWeight="400" fill="#3B82F6">Affiliation</text>
          <text x="4" y="185" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="21" fontWeight="400" fill="#64748B" letterSpacing="4">idevaffiliation.com</text>
        </g>
      </svg>
    </Link>
  )
}
