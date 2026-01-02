# VexioHQ Website - Server Deployment Guide

## Current Production Environment

| Item | Value |
|------|-------|
| **Server IP** | `72.60.27.165` |
| **Domain** | `vexiohq.com` |
| **Server Path** | `/opt/stack/apps/vexiohq-website` |
| **Container Name** | `vexiohq-website` |
| **Git Remote (Server)** | `vexiohq` → `https://github.com/aghetiadtranquil/vexiohq-website.git` |
| **Local Git Remotes** | `origin` → DataTranquil/comapny-website.git, `vexio` → aghetiadtranquil/vexiohq-website.git |

### Quick Deploy Commands

```bash
# From local machine - push to both remotes
git push origin main && git push vexio main

# SSH to server and pull + rebuild
ssh dev@72.60.27.165
cd /opt/stack/apps/vexiohq-website
git pull vexiohq main
docker compose up -d --build
```

---

## Prerequisites

- Server with Ubuntu 20.04+ (or similar Linux)
- Docker & Docker Compose installed
- Traefik reverse proxy configured (optional but recommended)
- Domain `vexiohq.com` with DNS pointing to your server

---

## Option 1: Docker Deployment (Recommended)

### Step 1: SSH to Your Server

```bash
ssh user@YOUR_SERVER_IP
```

### Step 2: Create Project Directory

```bash
sudo mkdir -p /opt/apps/vexiohq-website
cd /opt/apps/vexiohq-website
```

### Step 3: Clone the Repository

```bash
git clone https://github.com/aghetiadtranquil/vexiohq-website.git .
```

### Step 4: Create Dockerfile

```bash
cat > Dockerfile << 'EOF'
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
EOF
```

### Step 5: Create Docker Compose File

#### With Traefik (SSL automatic):

```bash
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  vexiohq-website:
    build: .
    container_name: vexiohq-website
    restart: unless-stopped
    expose:
      - "3000"
    environment:
      - NODE_ENV=production
    labels:
      # Traefik configuration
      - "traefik.enable=true"
      - "traefik.http.routers.vexiohq.rule=Host(`vexiohq.com`) || Host(`www.vexiohq.com`)"
      - "traefik.http.routers.vexiohq.entrypoints=websecure"
      - "traefik.http.routers.vexiohq.tls.certresolver=letsencrypt"
      - "traefik.http.services.vexiohq.loadbalancer.server.port=3000"
      # Redirect www to non-www
      - "traefik.http.middlewares.vexiohq-redirect.redirectregex.regex=^https://www\\.vexiohq\\.com/(.*)"
      - "traefik.http.middlewares.vexiohq-redirect.redirectregex.replacement=https://vexiohq.com/$${1}"
      - "traefik.http.routers.vexiohq.middlewares=vexiohq-redirect"
    networks:
      - traefik-network

networks:
  traefik-network:
    external: true
EOF
```

#### Without Traefik (direct port):

```bash
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  vexiohq-website:
    build: .
    container_name: vexiohq-website
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
EOF
```

### Step 6: Update next.config.js

Make sure your `next.config.js` has standalone output:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // ... other config
}

module.exports = nextConfig
```

### Step 7: Build and Start

```bash
# Build and start in background
docker-compose up -d --build

# Check status
docker ps | grep vexiohq

# View logs
docker logs -f vexiohq-website
```

### Step 8: Update (when code changes)

```bash
cd /opt/apps/vexiohq-website
git pull origin main
docker-compose up -d --build
```

---

## Option 2: Direct Node.js Deployment

### Step 1: Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Clone and Build

```bash
cd /opt/apps
git clone https://github.com/aghetiadtranquil/vexiohq-website.git
cd vexiohq-website
npm ci
npm run build
```

### Step 3: Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

### Step 4: Start with PM2

```bash
pm2 start npm --name "vexiohq" -- start
pm2 save
pm2 startup
```

### Step 5: Configure Nginx (reverse proxy)

```bash
sudo apt install nginx -y

cat > /etc/nginx/sites-available/vexiohq << 'EOF'
server {
    listen 80;
    server_name vexiohq.com www.vexiohq.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/vexiohq /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 6: Add SSL with Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d vexiohq.com -d www.vexiohq.com
```

---

## DNS Configuration

At your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | YOUR_SERVER_IP | 300 |
| A | www | YOUR_SERVER_IP | 300 |

---

## Environment Variables (Optional)

Create `.env.local` for any environment-specific settings:

```bash
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (if needed)
CLERK_SECRET_KEY=sk_xxxxx
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_xxxxx
```

---

## Troubleshooting

### Check if site is running:
```bash
curl http://localhost:3000
```

### View Docker logs:
```bash
docker logs vexiohq-website --tail 100
```

### Restart container:
```bash
docker-compose restart
```

### Rebuild from scratch:
```bash
docker-compose down
docker-compose up -d --build --force-recreate
```

### Check disk space:
```bash
df -h
docker system prune -a  # Clean unused Docker data
```

---

## Automatic Deployment (CI/CD)

For automatic deployment on git push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /opt/apps/vexiohq-website
            git pull origin main
            docker-compose up -d --build
```

Add these secrets in GitHub repo settings:
- `SERVER_HOST`: Your server IP
- `SERVER_USER`: SSH username
- `SERVER_SSH_KEY`: Private SSH key

---

## Support

For issues, check:
- GitHub Issues: https://github.com/aghetiadtranquil/vexiohq-website/issues
- Docker logs: `docker logs vexiohq-website`
