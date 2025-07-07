#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# --- Configuration ---
# You can change these variables to match your project's needs.
DOCKER_CONTEXT="home-lab"
IMAGE_NAME="registry.rodydavis.dev/website"
IMAGE_TAG="latest"
STACK_NAME="rodydavis_website"
COMPOSE_FILE="docker-compose.prod.yml"

# --- Script ---

echo "🚀 Starting deployment process..."

# 1. Switch Docker context
# This command sets the active Docker environment.
# Make sure you have already created the 'home-lab' context.
echo "1/5 - Switching to Docker context: $DOCKER_CONTEXT"
docker context use "$DOCKER_CONTEXT"
echo "✅ Context switched successfully."

# 2. Build the Docker image
# This builds the Docker image from the Dockerfile in the current directory.
# The '-t' flag tags the image with the specified name and tag.
echo "2/5 - Building Docker image: $IMAGE_NAME:$IMAGE_TAG"
docker build -t "$IMAGE_NAME:$IMAGE_TAG" .
echo "✅ Image built successfully."

# 3. Push the Docker image to the registry
# This uploads your newly built image to your private or public Docker registry.
# You must be logged into the registry for this to work (e.g., using 'docker login').
echo "3/5 - Pushing image to registry..."
docker push "$IMAGE_NAME:$IMAGE_TAG"
echo "✅ Image pushed successfully."

# 4. Deploy the Docker stack
# This command deploys your application stack based on the docker-compose.yml file.
# It will create or update the services defined in the compose file.
echo "4/5 - Deploying stack '$STACK_NAME' from $COMPOSE_FILE..."
docker stack deploy -c docker-compose.yml -c "$COMPOSE_FILE" "$STACK_NAME"
echo "✅ Stack deployment initiated."

# 5. List the services in the stack
# This command shows the status of the services within your deployed stack,
# helping you to verify that everything is running as expected.
echo "5/5 - Verifying services for stack '$STACK_NAME'..."
docker stack services "$STACK_NAME"

echo "🎉 Deployment complete!"
