import Head from 'next/head'

export default function SEO({ title, description, image, url }: { title?: string, description?: string, image?: string, url?: string }) {
  const siteName = 'ডেইলি নিউজ'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'বাংলা সংবাদ পোর্টাল — দেশ-বিদেশের সর্বশেষ খবর'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || 'বাংলা সংবাদ পোর্টাল — দেশ-বিদেশের সর্বশেষ খবর'} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
