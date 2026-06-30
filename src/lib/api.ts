import type { ApiResponse, PaginatedResponse } from '@shared/types/api'
import type { CasinoWithAttachment } from '@shared/types/casino'
import type { Category } from '@shared/types/category'
import type { CmsPage } from '@shared/types/cmsPage'
import type { SpecialOffer } from '@shared/types/specialOffer'
import type { SocialLink } from '@shared/types/socialLink'

const SITE = process.env.NEXT_PUBLIC_SITE_SLUG
const API = process.env.API_URL
const KEY = process.env.API_SITE_KEY

if (!KEY) {
  throw new Error('API_SITE_KEY is required (server-side env)')
}

if (!SITE) {
  throw new Error('NEXT_PUBLIC_SITE_SLUG is required')
}

if (!API) {
  throw new Error('API_URL is required')
}

async function publicFetch<T>(path: string, tags: string[] = []): Promise<T> {
  const res = await fetch(`${API}/sites/${SITE}${path}`, {
    headers: {
      'X-Site-Key': KEY as string,
      Accept: 'application/json',
    },
    next: { revalidate: 3600, tags: [`site:${SITE}`, ...tags] },
  })

  if (!res.ok) {
    throw new Error(`API ${path} failed: ${res.status}`)
  }

  return res.json() as Promise<T>
}

// ── Casinos ──────────────────────────────────────────────────────────────────
export const getCasinos = (): Promise<ApiResponse<CasinoWithAttachment[]>> =>
  publicFetch('/casinos', ['casinos'])

export const getCasino = (slug: string): Promise<ApiResponse<CasinoWithAttachment>> =>
  publicFetch(`/casinos/${slug}`, [`casino:${slug}`])

// ── Categories ───────────────────────────────────────────────────────────────
export const getCategories = (): Promise<ApiResponse<Category[]>> =>
  publicFetch('/categories', ['categories'])

export interface CategoryCasinosMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

export interface CategoryWithCasinos {
  category: Category
  casinos: CasinoWithAttachment[]
  meta: CategoryCasinosMeta
}

export const getCategory = (slug: string, page = 1): Promise<ApiResponse<CategoryWithCasinos>> =>
  publicFetch(`/categories/${slug}?page=${page}`, [`category:${slug}`])

// ── Special Offers ───────────────────────────────────────────────────────────
export const getSpecialOffers = (): Promise<ApiResponse<SpecialOffer[]>> =>
  publicFetch('/special-offers', ['special-offers'])

export const getSpecialOffer = (slug: string): Promise<ApiResponse<SpecialOffer>> =>
  publicFetch(`/special-offers/${slug}`, [`special-offer:${slug}`])

// ── Social links (footer) ────────────────────────────────────────────────────
export const getSocialLinks = (): Promise<ApiResponse<SocialLink[]>> =>
  publicFetch('/social-links', ['social-links'])

// ── Newsletter unsubscribe (one-click, token-based) ───────────────────────────
// Server-side only; never cached. Returns true when the request is accepted
// (the backend is idempotent, so unknown tokens also resolve cleanly).
export const unsubscribe = async (token: string): Promise<boolean> => {
  const res = await fetch(`${API}/sites/${SITE}/newsletter/unsubscribe`, {
    method: 'POST',
    headers: {
      'X-Site-Key': KEY as string,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ token }),
    cache: 'no-store',
  })
  return res.ok
}

// ── CMS / Legal pages (site-scoped, published only) ──────────────────
export const getPage = async (slug: string): Promise<CmsPage | null> => {
  const res = await fetch(`${API}/sites/${SITE}/pages/${slug}`, {
    headers: { 'X-Site-Key': KEY as string, Accept: 'application/json' },
    next: { revalidate: 3600, tags: [`site:${SITE}`, `page:${slug}`] },
  })
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`API /pages/${slug} failed: ${res.status}`)
  }
  const json = (await res.json()) as { data: CmsPage }
  return json.data
}

export type { PaginatedResponse }
