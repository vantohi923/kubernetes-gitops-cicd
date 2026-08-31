# kubernetes-gitops-cicd
Automated CI/CD and GitOps deployment pipeline for a containerized Node.js API using Docker, GitHub Actions, ArgoCD, and Kubernetes.


# kubernetes-gitops-cicd

CI/CD pipeline and GitOps workflow using Docker, GitHub Actions, ArgoCD, and Kubernetes.

## Architecture & Workflow

1. Push code to `main` branch.
2. GitHub Actions runs test against `/health` endpoint.
3. Docker image is built and pushed to GitHub Container Registry (`ghcr.io`).
4. Pipeline updates the deployment manifest in the GitOps config repo (`grade-api-gitops`) with the new image tag.
5. ArgoCD detects the change and syncs the deployment to the Kubernetes cluster.

## Stack

* Node.js / Express
* Docker
* Kubernetes (Deployments, Services, ConfigMaps, Secrets)
* GitHub Actions & GHCR
* ArgoCD
* Bash

## Local Setup

Make the deployment script executable and run:

```bash
chmod +x deploy.sh
./deploy.sh
