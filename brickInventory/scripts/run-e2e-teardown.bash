#!/bin/bash

SCRIPTDIR=$(dirname $0)

echo "Starting at $( date )"

echo '############################################################'
echo '############### Stopping jobs Webdriver and Http server'

jobs
bash ${SCRIPTDIR}/kill-webdriver.bash
bash ${SCRIPTDIR}/kill-http-server-localhost.bash
bash ${SCRIPTDIR}/kill-xvfb.bash
jobs

sleep 1
echo
echo "Ending at $( date )"
