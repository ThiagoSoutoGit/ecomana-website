ARG INSTALLER=pnpm

FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
ARG INSTALLER

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies using pnpm efficiently
COPY package.json pnpm-lock.yaml ./

RUN corepack enable && corepack prepare pnpm@latest --activate \
  && pnpm install --frozen-lockfile

# Build the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable && pnpm run build

# Production image using Nginx
FROM nginx:alpine AS runner
COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
