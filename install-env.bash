#!/bin/bash -e

cd /vagrant

echo "Starting at $( date )"

echo '######################'
echo 'Updating apt'
echo '######################'

sudo apt-get update
sudo locale-gen en_US.UTF-8
sudo locale-gen fr_FR.UTF-8

echo '######################'
echo 'Installing node packages'
echo '######################'

sudo apt-get -y install git
sudo apt-get -y install nodejs
sudo apt-get install nodejs-legacy
sudo apt-get -y install npm

npm update

echo '######################'
echo 'Installing yeoman'
echo '######################'

npm install -g yo bower grunt-cli
npm install -g generator-angular

npm update

echo '######################'
echo 'Installing http-server'
echo '######################'

# to be able to run npm start and bind eth0 instead of localhost
sudo npm install -g http-server

echo '######################'
echo 'Installing Test tools'
echo '######################'

# get rid of "should be installed with -g" messages
npm install -g jasmine-node

# work around a problem with karma on phantomJS
sudo apt-get -y install libfontconfig

echo '######################'
echo 'Installing Docker'
echo '######################'

sudo apt-get install -y docker.io
sudo docker run --rm -v /usr/local/bin:/target jpetazzo/nsenter

echo '######################'

echo "Ending at $( date )"
echo "Run vagrant ssh to connect to the dev environnement, cd /vagrant and use npm commands (check package.json scripts)"


exit




