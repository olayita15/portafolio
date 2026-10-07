type PortfolioSeoOptions = {
  title: string
  description: string
  path: string
}

export function usePortfolioSeo({ title, description, path }: PortfolioSeoOptions) {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl as string
  const canonicalUrl = siteUrl ? new URL(path, siteUrl).toString() : undefined

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogLocale: 'es_CO',
    ogUrl: canonicalUrl,
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description
  })

  useHead({
    link: canonicalUrl ? [{ rel: 'canonical', href: canonicalUrl }] : []
  })
}
