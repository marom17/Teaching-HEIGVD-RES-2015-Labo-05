FROM httpd:2.4
COPY ./public-html/ /usr/local/apache2/htdocs/
RUN a2enmod mod_proxy && mod_proxy_balancer
