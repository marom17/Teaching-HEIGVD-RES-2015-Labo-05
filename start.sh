#!/bin/bash
#Démarage du loadbalancer
docker rm loadbalancer
docker run -d -p 80:80 --name loadbalancer rom/lb httpd-foreground

