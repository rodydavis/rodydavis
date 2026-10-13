# Stage 1: Build stage
FROM node:24-alpine AS build

# Install pnpm
RUN npm install -g pnpm@9.7.1

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build the project
RUN pnpm run build

# Stage 2: Runtime stage
FROM node:24-alpine AS runtime

# Set working directory
WORKDIR /app

# Install curl for docker healthcheck
RUN apk add --no-cache curl

# Install pnpm
RUN npm install -g pnpm@9.7.1

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy build output
COPY --from=build /app/dist ./dist

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=4321

# Expose port
EXPOSE 4321

# Start the Astro node server
CMD ["node", "./dist/server/entry.mjs"]
