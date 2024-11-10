#!/bin/sh
set -e

# Verificar si DATABASE_URL está configurado
if [ -z "$DATABASE_URL" ]; then
    echo "Error: DATABASE_URL no está configurado"
    exit 1
fi

# Esperar a que PostgreSQL esté realmente listo
echo "Esperando a PostgreSQL..."
until nc -z -v -w30 postgres 5432; do
  echo "Esperando a que PostgreSQL se conecte..."
  sleep 1
done

# Generar el cliente Prisma
echo "Generando cliente Prisma..."
npx prisma generate

# Ejecutar las migraciones en producción
echo "Ejecutando migraciones en producción..."
npx prisma migrate deploy

echo "Iniciando la aplicación..."
npm run start:prod
