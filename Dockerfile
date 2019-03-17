FROM node:10 AS build-env
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

FROM gcr.io/distroless/nodejs
COPY --from=build-env /usr/src/app /usr/src/app
WORKDIR /usr/src/app

EXPOSE 8080
CMD ["server.js"]
