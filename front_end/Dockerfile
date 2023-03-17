FROM node:lts-alpine as build-stage

WORKDIR /web

COPY package*.json ./
RUN npm install

ARG VITE_MODE
ENV VITE_MODE=$VITE_MODE

ARG VITE_API_PORT
ENV VITE_API_PORT=$VITE_API_PORT

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]