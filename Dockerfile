
FROM node:20 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20 as production-stage

COPY --from=build-stage /app/.next /app/.next
COPY --from=build-stage /app/node_modules /app/node_modules
#COPY --from=build-stage /app/public /app/public
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

EXPOSE 3000
CMD ["npm","run","dev"]
