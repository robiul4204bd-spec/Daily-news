export default function Sidebar({ categories }: { categories: any[] }) {
  return (
    <aside className="p-4 border rounded">
      <h4 className="font-semibold mb-2">ক্যাটেগরি</h4>
      <ul className="space-y-2 text-sm">
        {categories.map((c: any) => (
          <li key={c.id}>
            <a href={`/category/${c.attributes.slug}`} className="text-blue-600">{c.attributes.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
