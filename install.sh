#!/bin/bash
sudo apt update && apt dist-upgrade -y
sudo apt upgrade -y & sudo apt install nodejs nginx npm certbot python3-certbot vite
sudo git clone https://github.com/nwcfollowthewhiterabbit/test.git 
cd test
sudo mkdir /var/www/web.app && sudo chmod -R 644 /var/www/web.app
sudo cp nginx.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/nginx.conf /etc/nginx/sites-enabled/
#sudo cp front.conf /etc/nginx/sites-available/ && sudo cp back.conf /etc/nginx/sites-available/
#ln -s /etc/nginx/sites-available/front.conf /etc/nginx/sites-enabled/ && ln -s /etc/nginx/sites-available/back.conf /etc/nginx/sites-enabled/


sh front-setup.sh
sh back-setup.sh
systemctl restart nginx
#cp -r build/* /var/www/web.app/
