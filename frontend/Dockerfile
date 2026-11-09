# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy manifest dulu untuk memanfaatkan Docker Cache
COPY package*.json ./
RUN npm ci

# Copy sisa kode dan jalankan build Vite
COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine
# Hapus default index.html bawaan Nginx
RUN rm -rf /usr/share/nginx/html/*

# Ambil HANYA folder /dist dari Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Opsional: Copy konfigurasi kustom nginx jika ada
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]