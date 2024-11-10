# Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Instalar dependencias necesarias
RUN apk add --no-cache openssl

# Copiar archivos de dependencias
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Generar el cliente de Prisma y construir la aplicación
RUN npx prisma generate
RUN npm run build

# Production Stage
FROM node:18-alpine

WORKDIR /app

# Instalar dependencias necesarias para producción
RUN apk add --no-cache openssl

# Copiar archivos necesarios desde el builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copiar el script de entrada
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["docker-entrypoint.sh"]