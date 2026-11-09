# Stage 1: Builder
FROM node:22-alpine3.19 AS builder
# [PATCH] Ambil update keamanan OS terbaru untuk menambal CVE musl
RUN apk update && apk upgrade --no-cache
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

# Stage 2: Production Runner
FROM node:22-alpine3.19
# [PATCH] Lakukan hal yang sama di production image
RUN apk update && apk upgrade --no-cache
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

USER node

EXPOSE 3000
CMD ["node", "index.js"]