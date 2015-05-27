#!/bin/bash
#Démarage des système principaux
docker start dockerui
docker start loadbalancer
docker start control

