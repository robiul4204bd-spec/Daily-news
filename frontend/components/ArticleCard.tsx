import Link from 'next/link'
import React from 'react'

export default function ArticleCard({ article }: { article: any }) {
  const attrs = article.attributes
  return (
    <article className="border rounded p-4">
      <h3 className="text-lg font-semibold"><Link href={`/article/${attrs.slug}`}>{attrs.title}</Link></h3>
      <p className="text-sm text-gray-600">{attrs.excerpt}</p>
      <p className="text-xs text-gray-500 mt-2">লেখক: {attrs.author?.data?.attributes?.name ?? '—'}</p>
    </article>
  )
}
