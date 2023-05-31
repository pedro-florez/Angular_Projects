# Primera Etapa
FROM node:18.13.0 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Segunda Etapa
FROM nginx:alpine
	
COPY --from=build-step /app/dist/lista-empleados.app /usr/share/nginx/html