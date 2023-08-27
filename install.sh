#!/bin/bash
sudo apt update && apt upgrade -y && sudo apt install nodejs nginx npm -y
sudo mkdir /web.app
sudo git clone https://github.com/nwcfollowthewhiterabbit/test.git /web.app/
cd /web.app/
sudo sh install-back.sh
sudo sh install-front.sh
