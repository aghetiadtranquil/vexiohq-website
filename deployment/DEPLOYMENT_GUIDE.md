# Company Website Deployment Guide

This guide covers deploying the DataTranquil company website on a self-hosted server with Docker and Traefik.

## Prerequisites

- VPS with Docker and Docker Compose installed
- Domain name configured (datatranquil.com)
- Traefik reverse proxy running
- SSH access to your server

## Deployment Steps

### 1. Clone the Repository on Your Server

```bash
ssh dev@your-server-ip
cd /opt/stack/apps
git clone git@github.com:DataTranquil/comapny-website.git company-website
cd company-website
```

### 2. Set Up Deployment Files

Copy the deployment files to the root directory:

```bash
cp deployment/docker-compose.yml .
cp deployment/Dockerfile .
```

### 3. Configure Environment (if needed)

If your website needs environment variables:

```bash
cp deployment/.env.example .env
# Edit with your values
vim .env
```

### 4. Build and Deploy

```bash
# Build the Docker image
docker compose build

# Start the container
docker compose up -d
```

### 5. Verify Deployment

1. Check container status:
   ```bash
   docker compose ps
   ```

2. Check logs:
   ```bash
   docker logs company-website -f
   ```

3. Test the website:
   - Visit https://datatranquil.com
   - Visit https://www.datatranquil.com

## Directory Structure on Server

```
/opt/stack/apps/company-website/
├── docker-compose.yml
├── Dockerfile
├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── [your website source files]
└── .env (if needed)
```

## Updating the Website

To deploy updates:

```bash
cd /opt/stack/apps/company-website
git pull origin main
docker compose build --no-cache
docker compose up -d
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs company-website

# Check if port 3000 is already in use
netstat -tlnp | grep 3000
```

### Website not accessible
1. Check Traefik logs: `docker logs traefik`
2. Verify DNS points to your server
3. Check SSL certificate: `docker exec traefik traefik certs`

### Build failures
```bash
# Clean build
docker compose down
docker system prune -f
docker compose build --no-cache
docker compose up -d
```

## Monitoring

Monitor the website health:

```bash
# Check resource usage
docker stats company-website

# Check HTTP status
curl -I https://datatranquil.com
```

## Backup

The website is stateless, so backups should focus on:
1. Source code (handled by Git)
2. Any uploaded content in volumes
3. Environment configuration

## Security Notes

1. Keep dependencies updated
2. Use environment variables for sensitive data
3. Ensure Traefik SSL is properly configured
4. Monitor access logs for suspicious activity