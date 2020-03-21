
FROM node:10-alpine as base
WORKDIR /app
RUN apk add curl
RUN apk add git
RUN chmod -R 777 /app
RUN chown 1000:1000 /app
USER 1000

FROM base as build-api
COPY ./api /app
RUN npm i
RUN npm run build

FROM base
COPY --from=build-api /app/dist/app /app
COPY ./tasks /tasks
COPY --from=build-api /app/node_modules /app/node_modules
COPY --from=build-api /app/package.json /app

CMD node /app/index.js