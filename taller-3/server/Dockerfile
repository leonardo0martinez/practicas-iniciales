FROM node:17-alpine AS node
WORKDIR /server
COPY . .
RUN npm install

ENV DB_HOST 127.0.0.1
ENV DB_USERNAME prueba
ENV DB_PASSWORD prueba1234
ENV DB_PORT 27017
ENV DB_NAME test

EXPOSE 5000
CMD ["node", "server.js"]