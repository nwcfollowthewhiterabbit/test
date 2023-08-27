#!/bin/bash

github_url="https://github.com/nwcfollowthewhiterabbit/test.git"
mkdir /web.app
chmod 777 /web.app
target_directory="/web.app/"
#target_directory="/путь/к/целевой/папке"
git clone $github_url $target_directory
echo "Папка скопирована из GitHub."
