# DevOps Assessment — Next.js Containerized + Kubernetes (Minikube)

## What this repo contains
- Minimal Next.js app
- Multi-stage Dockerfile
- GitHub Actions workflow to build & push to GHCR
- Kubernetes manifests (deployment & service)

## Local Setup
```bash
git clone https://github.com/thummalaprharsha-glitch/nextjs-devops-assessment.git
cd nextjs-devops-assessment
npm install
npm run dev
# visit http://localhost:3000
```

## Docker Local Build
```bash
docker build -t nextjs-assessment:local .
docker run -p 3000:3000 nextjs-assessment:local
```

## Deploy to Minikube
```bash
minikube start
kubectl apply -f k8s/
minikube service nextjs-service --url
```

## Image
`ghcr.io/thummalaprharsha-glitch/nextjs-devops-assessment:latest`