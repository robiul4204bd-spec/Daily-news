# Daily News (Bangla)

এই রিপোজিটরিটা একটি বাংলা সংবাদ সাইট (যুগান্তর-স্টাইল) স্ক্যাফোল্ড করার জন্য।

Quick start (local):

1. Clone the repo
   ```bash
   git clone https://github.com/robiul4204bd-spec/Daily-news.git
   cd Daily-news
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Dev server
   ```bash
   npm run dev
   ```

Self-hosting (প্রস্তাব)
- Frontend: Next.js অ্যাপ (এই রিপো) — build → start (Node) বা Vercel নয়, নিজের সার্ভারে (Ubuntu) PM2 ব্যবহার করে রান করুন।
- Backend / CMS: Strapi (self-hosted) বা অন্য headless CMS। Strapi কে আলাদা সার্ভারে বা এক্সটার্নাল ডাটাবেস (Postgres) দিয়ে চালান।

Content model (প্রস্তাবিত — Strapi):
- Article: title, slug, content (rich text/markdown), excerpt, featured_image, category (relation), author (relation), published_at
- Category: name, slug
- Author: name, bio, avatar

আমি প্রাথমিকভাবে Next.js + Tailwind CSS স্ক্যাফোল্ড যোগ করেছি: package.json, Next setup, Tailwind config, নমুনা পেজ ও কম্পোনেন্ট।

পরবর্তী ধাপ (আমি করে দিতে পারি):
- Strapi কনটেন্ট মডেল ও একটি Docker Compose সেটআপ যোগ করা (self-hosted CMS)
- আরও UI কম্পোনেন্ট: আর্টিকেল লিস্ট, সাইডবার উইজেট, ক্যাটেগরি পেজ
- ডিপ্লয় নির্দেশাবলী (systemd/PM2/nginx reverse proxy, SSL)

আপনি এখন কী চান? আমি Strapi Docker Compose ও কনফিগ যোগ করব, নাকি প্রথমে Frontend‑এর UI বাড়াব?