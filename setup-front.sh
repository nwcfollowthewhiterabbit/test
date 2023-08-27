cd /web.app/front
sudo npm install -g create-react-app && sudo npm install -g create-vite 
npm install
npm run build
mkdir /var/www/web.app && chmod -R 644 /var/www/web.app
cp -r build/* /var/www/web.app/
systemctl restart nginx
