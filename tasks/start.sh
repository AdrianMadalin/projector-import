#!/bin/bash

# setting for elastic search container
#echo "setting for elastic search container: sudo sysctl -w vm.max_map_count=262144"
#sudo sysctl -w vm.max_map_count=262144

echo Starting project

docker-compose pull
docker-compose up -d --build --force-recreate; docker-compose logs -f
