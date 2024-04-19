set -u
: "$CONTAINER_REGISTRY"
: "$VERSION"

envbust < ./deploy.yml | kubectl apply -f -