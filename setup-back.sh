#!/bin/bash
cd /web.app/back/
sudo curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh 
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose 
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo docker-compose -f ./docker-compose.yml --env-file ./.env up -d
