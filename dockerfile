FROM node:16.17.1

WORKDIR /var/www
#ARG APP_ENV

COPY package.json .
#COPY yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000
ENV APP_ENV "production"
CMD ["npm", "start"]