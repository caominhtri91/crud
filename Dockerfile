FROM node:alpine

RUN apk --no-cache add git

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY ./ ./

CMD ["yarn", "start"]
