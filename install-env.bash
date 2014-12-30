#!/bin/bash -e

cd /vagrant

echo "Starting at $( date )"

echo '######################'
echo 'Updating apt'
echo '######################'

sudo apt-get update

echo '######################'
echo 'Installing node packages'
echo '######################'

sudo apt-get -y install git
sudo apt-get -y install nodejs
sudo apt-get install nodejs-legacy
sudo apt-get -y install npm

echo '######################'
echo 'Installing yeoman'
echo '######################'

npm install -g yo bower grunt-cli
npm install -g generator-angular

echo '######################'
echo 'Installing http-server'
echo '######################'

# to be able to run npm start and bind eth0 instead of localhost
sudo npm install -g http-server

echo '######################'
echo 'Installing firefox'
echo '######################'

# used by karma tests
sudo apt-get -y install firefox

echo '######################'

echo "Ending at $( date )"

exit




