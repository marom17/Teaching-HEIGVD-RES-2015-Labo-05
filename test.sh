#!/bin/bash
echo "Démarage de "$1" frontend et de "$2" backend"
echo ""
for ((i=1; i<=$1;i++))
do
    echo "Start frontend "$i
    docker run -d sam/frontend
done
echo ""
for ((j=1; j<=$2;j++))
do
    echo "Start backend "$j
    docker run -d rom/backend
done

