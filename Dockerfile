# Base image
FROM node:18-alpine AS base

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm remove cypress
RUN cat package.json
RUN pnpm install

# Copy all files to the container
COPY . .

# Build the Next.js application (supports pages directory)
RUN pnpm run build

# Production stage
FROM node:18-alpine AS production

# Install pnpm globally in the production stage
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy only the necessary files for production
COPY --from=base /app ./

# Expose the application port
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "run", "start"]
