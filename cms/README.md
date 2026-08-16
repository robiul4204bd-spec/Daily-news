# Strapi content types and seed

This folder contains JSON schemas for the Strapi content-types (Article, Category, Author)
and a small seed script (Node 18+ using global fetch) to insert sample data via Strapi REST API.

How to use
1. Start Strapi (docker-compose up -d --build)
2. Create an API token in Strapi admin with "Full control" or content write permissions (Settings → API Tokens). Copy the token.
3. Set environment variables (or export in shell):
   - STRAPI_URL (default: http://localhost:1337)
   - STRAPI_API_TOKEN (the token you created)

4. Run the seed script (requires Node 18+):
   cd cms/seed
   STRAPI_URL=http://localhost:1337 STRAPI_API_TOKEN=your_token_here node seed.mjs

Content-type JSON locations (if you prefer to create files manually)
- For a Strapi project, you can place each schema in:
  src/api/<collection-name>/content-types/schema.json

Examples (Article => src/api/article/content-types/schema.json)

Notes
- The seed script assumes the content-types exist and proper permissions are set for the API token to create content.
- If you get permission errors, ensure the API token has the correct permissions or use the Admin UI to create initial content.

