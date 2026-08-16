import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-red-700">ডেইলি নিউজ — নমুনা হোমপেজ</h1>
        <p className="text-gray-600 mt-2">বাংলা খবরের সাইটের ডেমো পেজ</p>
      </header>

      <section className="grid gap-6">
        <article className="border-b pb-4">
          <h2 className="text-xl font-semibold"><Link href="/article/sample-article">ঢাকা শহরে নতুন সড়ক উদ্বোধন</Link></h2>
          <p className="text-gray-700 mt-2">এটি একটি নমুনা আর্টিকেল সারাংশ — পুরো আর্টিকেল পেজ দেখুন।</p>
        </article>

        <aside className="text-sm text-gray-500">ক্যাটেগরি: রাজনীতি, অর্থনীতি, খেলা</aside>
      </section>
    </main>
  )
}
