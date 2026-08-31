#!/bin/bash
set -e

echo "Deploying Grade Service to Kubernetes"

# Aplicare manifeste Kubernetes
kubectl apply -f configmap.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Verificare status rollout
echo "Waiting for pods to be ready..."
kubectl rollout status deployment/grade-service --timeout=60s

echo "Deployment Successful! "
kubectl get pods -l app=grade-service
