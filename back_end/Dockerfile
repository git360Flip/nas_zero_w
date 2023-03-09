FROM node:lts

RUN mkdir /app && mkdir /app/logs -p && chown node: /app -R

COPY . /app
WORKDIR /app

RUN mkdir /app/.npmcache
ENV npm_config_cache=/app/.npmcache

RUN npm install --no-optionnal
RUN npm run build

EXPOSE $PORT

ENTRYPOINT [ "npm", "run" ]
CMD [ "prod" ]
