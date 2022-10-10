FROM node:14-alpine
WORKDIR /app
COPY . /app/
RUN ["npm", "install"]
COPY . /app/
EXPOSE 5001
ENTRYPOINT ["npm", "start"]