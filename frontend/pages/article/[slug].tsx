import { useRouter } from 'next/router'

export default function Article() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <main className="max-w-3xl mx-auto p-6">
      <article>
        <h1 className="text-2xl font-bold">ঢাকা শহরে নতুন সড়ক উদ্বোধন</h1>
        <p className="text-sm text-gray-500 mt-2">প্রকাশিত: ১৬ অগাস্ট ২০২৬ — লেখক: মোঃ ফজিল</p>
        <div className="mt-4 prose">
          <p>এটি একটি নমুনা আর্টিকেল। যুগান্তর-স্টাইল নিউজ লেআউট উদাহরণ হিসেবে তৈরি করা হয়েছে।</p>
          <p>আরও কন্টেন্ট এখানে যুক্ত করা হবে।</p>
        </div>
      </article>
    </main>
  )
}
