# KubeApp

A simple stateless Node.js app deployed on Kubernetes.

## Features
- Stateless web server
- Displays pod name
- Exposed using NodePort

## Quick Start

1. Build and push image:
    ```bash
    docker build -t your-dockerhub-username/kubeapp:latest .
    docker push your-dockerhub-username/kubeapp:latest
    ```

2. Deploy to Kubernetes:
    ```bash
    kubectl apply -f k8s/
    ```

3. Access app on `http://<NodeIP>:30080`
