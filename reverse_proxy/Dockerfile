FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./certificates/fullchain.pem /etc/ssl/certs/fullchain.pem
COPY ./certificates/privkey.pem /etc/ssl/private/privkey.pem