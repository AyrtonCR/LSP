FROM node:14-alpine
WORKDIR /app
COPY package*.json /app/
RUN ["npm", "ci"]
COPY . /app/
EXPOSE 5001
ENTRYPOINT ["npm", "run", "start:dev"]