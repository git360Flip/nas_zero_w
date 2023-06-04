FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./certificates/localhost.crt /etc/ssl/certs/localhost.crt
COPY ./certificates/localhost.key /etc/ssl/private/localhost.key