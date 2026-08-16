# Roles & Permissions (Admin / Editor / Author)

এই ডক ফাইলে Strapi-তে তিনটি প্রধান ইউজার রোল কিভাবে তৈরী করবেন এবং কোন পারমিশন দেবেন তা ধাপে ধাপে দেওয়া আছে।

সংক্ষেপে প্রস্তাবিত রোল
- Admin: সম্পূর্ণ এক্সেস (অ্যাডমিন ইউজার)।
- Editor: আর্টিকেল তৈরি, সম্পাদনা, প্রকাশ/আনপাবলিশ; কেটাগরি দেখার ও তৈরি করার অনুমতি।
- Author: কেবল নিজের আর্টিকেল তৈরি/সম্পাদনা/মডেল; প্রকাশ করার অনুমতি সীমাবদ্ধ (অপ্রকাশিত/ড্রাফট)।

Strapi UI দিয়ে রোল তৈরি (স্টেপ-বাই-স্টেপ)
1. Strapi Admin এ লগইন করুন: http://localhost:1337/admin
2. বাম সাইডবার থেকে "Settings" → "Users & Permissions plugin" → "Roles" নির্বাচন করুন।
3. Editor রোল:
   - Click "Create new role" অথবা edit existing "Editor".
   - Permissions tab এ যান।
   - Content manager (application) → Article:
     - Create: ✅
     - Read: ✅
     - Update: ✅
     - Delete: ✅ (আপনি চাইলে না দিতে পারেন)
     - Publish: ✅ (Editor-কে প্রকাশের অনুমতি দিতে চাইলে)
   - Category: Create / Read / Update = ✅
   - Author (if exposed): Read = ✅
4. Author রোল:
   - Create new role "Author".
   - Article: Create: ✅, Read: ✅, Update: ✅ (কেবল নিজস্ব কন্টেন্ট সেন্সর প্রয়োগ করতে চাইলে lifecycle বা policy লাগবে), Delete: ❌ (অপশনাল), Publish: ❌
   - Category: Read = ✅ (Create না করলে ভাল)
5. Admin রোল:
   - Admin-কে পুরো আইটেমে full control রাখুন (Admin ইন্টারফেস থেকে)।

API টোকেন ও Permissions
- Settings → API Tokens → Create new token (if you need programmatic seed access).
  - Token Type: Full Access (Dev use). In production, create scoped tokens with only needed permissions (read-only for frontend public data).
- For public frontend read access, enable Public role permission for Article (find, findOne) under "Roles & Permissions" → Public.
  - Public role → Content-type permissions → Article → find & findOne = ✅

Advanced: Enforce "only own" policy for Authors
- Strapi core does not provide per-record ownership out-of-the-box for REST permissions. To allow Authors to only edit their own articles, implement a policy or use lifecycle hooks:
  - Create a policy in src/extensions/users-permissions/config/policies/ that checks request.user and compares resource author.
  - Or, in Strapi v4, create a server middleware/policy that enforces ownership.

Seed script note
- The included cms/seed/seed.mjs uses an API token to create sample categories, authors and articles. Use a token with create permissions or create content via the Admin UI once first admin is created.

Security reminder
- Never commit admin passwords or production secrets into the repository. Use the sanitized cms/.env.example as a template and keep actual secrets in cms/.env which is gitignored.
