FROM node:12-alpine

WORKDIR /app

COPY package.json package-lock*.json ./

RUN npm install --only=production

COPY ./ /app/

EXPOSE 8080 1234

CMD [ "npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "$PORT" ]
# CMD [ "npm", "run", "start" ]
