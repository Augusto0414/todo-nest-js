## Instalar modulos de node

```bash
$ npm install
```

# Levantar los contenedores de Docker

```bash
$ docker compose -f docker-compose.dev.yml  up
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

# Crear Imagen y ejecutar

```bash
 #Generar Imagen del dockerfile
$ docker build -t my-app .

 #probar la imagen con una bd postgres
$ docker compose -f docker-compose.yml  up

``
```

# Link del dockerhub

```plaintext
https://hub.docker.com/repository/docker/augusto04/nest-api/general
```
