# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Hanya install dependensi production (tanpa Jest, Supertest, dll)
RUN npm ci --omit=dev
COPY . .

# Stage 2: Production Runner
FROM node:20-alpine
WORKDIR /app

# Ambil modul production dan source code dari builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

# Keamanan: Gunakan user 'node' bawaan image (bukan root)
USER node

EXPOSE 3000
CMD ["node", "index.js"]