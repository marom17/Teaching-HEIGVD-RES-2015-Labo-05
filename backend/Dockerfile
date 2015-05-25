FROM debian:stable
RUN apt-get update
#RUN apt-get install vim -y
RUN apt-get install apache2 -y
RUN apt-get install php5-common libapache2-mod-php5 php5-cli -y
RUN apt-get --purge remove node  -y
RUN apt-get install nodejs -y
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN apt-get update --fix-missing
RUN apt-get install npm -y
RUN npm install -g pm2@0.12.9
RUN mkdir -p /home/script
COPY ./app /app
RUN chmod 777 /app/start.sh
COPY ./apache.sh /home/script/apache.sh
RUN chmod 777 /home/script/apache.sh
COPY ./mysite /var/www/html
RUN rm /var/www/html/index.html
ENTRYPOINT /app/start.sh
#COPY ./balancer.conf /etc/apache2/sites-available/balancer.conf
#RUN a2ensite balancer.conf
#COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
