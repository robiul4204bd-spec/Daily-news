// Seed script for Strapi (Node 18+). Usage:
// STRAPI_URL=http://localhost:1337 STRAPI_API_TOKEN=your_token node seed.mjs

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const TOKEN = process.env.STRAPI_API_TOKEN;

if (!TOKEN) {
  console.error('ERROR: STRAPI_API_TOKEN is not set');
  process.exit(1);
}

async function post(endpoint, body) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ data: body })
  });
  const json = await res.json();
  if (!res.ok) {
    console.error('Failed POST', endpoint, json);
    throw new Error('Seed failed');
  }
  return json;
}

async function run() {
  console.log('Seeding Strapi at', STRAPI_URL);

  // Create a category
  const categoryRes = await post('categories', {
    name: 'রাজনীতি',
    slug: 'rajnoiti'
  });
  console.log('Category created:', categoryRes.data.id);

  // Create an author
  const authorRes = await post('authors', {
    name: 'মোঃ ফজিল',
    bio: 'জনপ্রিয় রিপোর্টার, রাজশাহী',
  });
  console.log('Author created:', authorRes.data.id);

  // Create an article
  const articleRes = await post('articles', {
    title: 'ঢাকা শহরে নতুন সড়ক উদ্বোধন',
    slug: 'dhaka-new-road-inauguration',
    excerpt: 'ঢাকায় একটি নতুন সড়ক উদ্বোধন করা হয়েছে — এটি শহরের চলাচলে সরস বহুগুণ উন্নতি আনবে।',
    content: '<p>এটি একটি নমুনা আর্টিকেল কন্টেন্ট। যুগান্তর-স্টাইল নিউজ লেআউট উদাহরণ হিসেবে তৈরি করা হয়েছে।</p>',
    author: authorRes.data.id,
    category: categoryRes.data.id,
    publishedAt: new Date().toISOString()
  });
  console.log('Article created:', articleRes.data.id);

  console.log('Seeding complete.');
}

run().catch(err => { console.error(err); process.exit(1); });
