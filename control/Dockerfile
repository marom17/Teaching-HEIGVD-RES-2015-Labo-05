FROM debian:stable
RUN apt-get update
RUN apt-get --purge remove node  -y
RUN apt-get install nodejs -y
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get update --fix-missing
RUN apt-get install npm -y
RUN npm install -g pm2@0.12.9
COPY ./app /app
RUN chmod 777 /app/start.sh
ENTRYPOINT /app/start.sh
