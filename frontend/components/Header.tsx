import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-red-700">ডেইলি নিউজ</a>
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/">হোম</Link>
          <Link href="/category/rajnoiti">রাজনীতি</Link>
          <Link href="/category/arthoniti">অর্থনীতি</Link>
          <Link href="/category/khela">খেলা</Link>
            <Link href="/category/khela">আন্তর্জাতিক খবর</Link>
        </nav>
      </div>
    </header>
  )
}
