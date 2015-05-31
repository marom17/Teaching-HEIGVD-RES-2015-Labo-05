FROM httpd:2.4
RUN apt-get update
RUN apt-get --purge remove node  -y
RUN apt-get install nodejs -y
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get update --fix-missing
RUN apt-get install npm -y
RUN npm install -g pm2@0.12.9
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
COPY ./balancer.conf /usr/local/apache2/conf/extra/balancer.conf
COPY ./app /app
COPY ./apache.sh /app/apache.sh
RUN chmod 777 /app/start.sh
RUN chmod 777 /app/apache.sh
ENTRYPOINT /app/start.sh
