#!/bin/bash

echo "stopping all docker containers"
docker stop $(docker ps -a -q) ; docker network rm $(docker network ls | awk '/ / { print $1 }') ; docker rm $(docker ps -a -q)

