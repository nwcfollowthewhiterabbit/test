#!/bin/bash
sudo apt update && apt dist -upgrade -&& apt upgrade -yy & sudo apt install nodejs nginx npm
#data & dependecies
sudo mkdir /web.app
sudo git clone https://github.com/nwcfollowthewhiterabbit/test.git /web.app/
echo "building back"
cd /web.app/back/

sudo curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh 
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose 
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo docker-compose -f ./docker-compose.yml --env-file ./.env up -d

cp web.app.conf /etc/nginx/sites-available/
ln -s /etc/nginx/sites-available/web.app.conf etc/nginx/sites-enabled/

##
echo "building front"
sudo npm install -g create-react-app && sudo npm install -g create-vite && echo "install ok"
cd .. && cd front
npm install
npm run build
mkdir /var/www/web.app && chmod -R 644 /var/www/web.app
cp -r build/* /var/www/web.app/
systemctl restart nginx
