import SEO from '../../components/SEO'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

export default function CategoryPage({ category, articles }: any) {
  return (
    <>
      <SEO title={category?.attributes?.name} description={`ক্যাটেগরি: ${category?.attributes?.name}`} />
      <Header />
      <main className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-4">{category?.attributes?.name}</h1>
          {articles.length === 0 && <div className="text-gray-600">কোনো আর্টিকেল পাওয়া যায়নি।</div>}
          {articles.map((a: any) => (
            <article key={a.id} className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold"><a href={`/article/${a.attributes.slug}`}>{a.attributes.title}</a></h2>
              <p className="text-sm text-gray-600 mt-2">{a.attributes.excerpt}</p>
            </article>
          ))}
        </section>

        <aside>
          <Sidebar categories={[]} />
        </aside>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context: any) {
  const { slug } = context.params
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

  try {
    const catRes = await fetch(`${API_URL}/api/categories?filters[slug][$eq]=${slug}`)
    const catJson = await catRes.json()
    const category = catJson.data?.[0] || null

    const articlesRes = await fetch(`${API_URL}/api/articles?filters[category][slug][$eq]=${slug}&populate=author`)
    const articlesJson = await articlesRes.json()
    const articles = articlesJson.data || []

    return { props: { category, articles } }
  } catch (err) {
    console.error(err)
    return { props: { category: null, articles: [] } }
  }
}
