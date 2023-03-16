FROM node:lts-alpine

RUN mkdir /api && mkdir /api/logs -p && chown node: /api -R

WORKDIR /api

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE $API_PORT

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
