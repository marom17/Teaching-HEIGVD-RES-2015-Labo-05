FROM node:0.10
RUN npm install -g pm2@0.12.9
COPY ./app /app
RUN chmod 777 /app/start.sh
ENTRYPOINT /app/start.sh