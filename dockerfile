FROM node:alpine

WORKDIR /app/

COPY /. package.json ./
RUN ..
COPY . .

RUN npm install

CMD [ "npm", "start" ]