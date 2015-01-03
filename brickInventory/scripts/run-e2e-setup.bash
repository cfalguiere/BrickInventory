#!/bin/bash

SCRIPTDIR=$(dirname $0)

echo "Starting at $( date )"

echo '############################################################'
echo '############### Xvfb settings'

Xvfb :21 -screen 0 1024x768x24 &
export DISPLAY=:21
#export DISPLAY=:10

echo '############################################################'
echo '############### Starting Webdriver and Http-server'

npm install
http-server -a localhost -p 8000 -c-1 &
webdriver-manager start &
