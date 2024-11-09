## Project setup

```bash
$ npm install
```

# Levantar los contenedores de Docker

```bash
$ docker-compose up -d
```

# Crear un archivo .env y agregar la siguiente línea

```plaintext
DATABASE_URL="postgresql://postgres:password@localhost:5435/nesTodo?schema=public"
```

## Instalar y migrar Prisma

```bash
# Instalar Prisma
$ npm install prisma --save-dev
$ npx prisma migrate dev --name init
```

# Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
