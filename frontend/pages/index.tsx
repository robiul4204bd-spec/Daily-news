import Link from 'next/link'
import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar'

export default function Home({ articles, categories }: { articles: any[], categories: any[] }) {
  return (
    <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <SEO title="সম্প্রতিক খবর" description="ডেইলি নিউজ — সাম্প্রতিক খবর" />

      <section className="md:col-span-2">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-red-700">ডেইলি নিউজ — সাম্প্রতিক খবর</h1>
          <p className="text-gray-600 mt-2">বাংলা খবরের সাইটের ডেমো পেজ</p>
        </header>

        <section className="grid gap-6">
          {articles.length === 0 && (
            <div className="text-gray-600">কোনো আর্টিকেল পাওয়া যায়নি।</div>
          )}

          {articles.map((a) => {
            const attrs = a.attributes
            return (
              <article key={a.id} className="border-b pb-4">
                <h2 className="text-xl font-semibold">
                  <Link href={`/article/${attrs.slug}`}>{attrs.title}</Link>
                </h2>
                <p className="text-gray-700 mt-2">{attrs.excerpt}</p>
                <p className="text-sm text-gray-500 mt-2">প্রকাশিত: {attrs.publishedAt ? new Date(attrs.publishedAt).toLocaleDateString('bn-BD') : '—' } — লেখক: {attrs.author?.data?.attributes?.name ?? '—'}</p>
              </article>
            )
          })}
        </section>
      </section>

      <aside>
        <Sidebar categories={categories} />
      </aside>
    </main>
  )
}

export async function getServerSideProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'
  try {
    const [res, catRes] = await Promise.all([
      fetch(`${API_URL}/api/articles?populate=author`),
      fetch(`${API_URL}/api/categories`),
    ])
    const json = await res.json()
    const catJson = await catRes.json()
    const articles = json.data || []
    const categories = catJson.data || []
    return { props: { articles, categories } }
  } catch (err) {
    console.error('Failed to fetch articles', err)
    return { props: { articles: [], categories: [] } }
  }
}
