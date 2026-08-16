# Production deploy (Ubuntu) — quick guide

This project is scaffolded to run with Docker Compose (frontend + Strapi + Postgres).

1. Install Docker & Docker Compose on Ubuntu
   - sudo apt update
   - sudo apt install -y docker.io docker-compose
   - sudo systemctl enable --now docker

2. Copy .env (from cms/.env.example) and secure secrets.

3. Start services
   - docker-compose up -d --build

4. Configure nginx as reverse proxy (optional)
   - create server block, proxy / to frontend (3000) and /cms (or subdomain) to Strapi (1337)
   - obtain SSL cert with certbot and configure

Notes
- Image uploads are local by default; consider S3 or a dedicated storage for production.
- Change all APP_KEYS and JWT secrets before exposing to public network.
