#!/bin/bash

docker build -t rom/lb ./loadbalancer
docker build -t sam/frontend ./frontend
docker build -t rom/backend ./backend
docker build -t rom/control ./control
docker run -d -p 9000:9000 --name dockerui --privileged -v /var/run/docker.sock:/var/run/docker.sock dockerui/dockerui
docker run -d -p 80:8080 --name loadbalancer rom/lb
docker run -d --name control rom/control

docker stop control
docker stop dockerui
docker stop loadbalancer
