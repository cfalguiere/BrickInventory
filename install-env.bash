#!/bin/bash
sudo apt-get update
sudo apt-get -y install git
sudo apt-get -y install nodejs
#sudo apt-get install nodejs-legacy
sudo apt-get -y install npm
sudo npm install -g grunt-cli
sudo npm install -g bower

# to be able to run npm start and bind eth0 instead of localhost
sudo npm install -g http-server

# used by karma tests
sudo apt-get -y install firefox

#sudo npm install karma-phantomjs-launcher --save-dev
