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
npm install jasmine-node -g

# used by karma tests
sudo apt-get -y install firefox
# used to run firefox headless
sudo apt-get -y install xvfb
sudo cp install/xvfb-service.sh /etc/init.d/xvfb
sudo chmod +x /etc/init.d/xvfb
sudo /etc/init.d/xvfb start

# bridges firefox to Karma (not required for Chrome ou PhantomJS)
npm install karma-firefox-launcher --save-dev

sudo npm install protractor -g
#npm install webdriver-manager

# java used by selenium webdriver
sudo apt-get install -y default-jre
sudo webdriver-manager update

echo '######################'
echo 'Installing Docker'
echo '######################'

sudo apt-get install -y docker.io

echo '######################'

echo "Ending at $( date )"

exit




