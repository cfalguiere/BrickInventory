CONTAINER_NAME=protractor
IMAGE_NAME=cfalguiere/protractor-firefox-headless

CONTAINER_ID=$( sudo docker ps -a | grep "protractor" | awk '{print $1}' )
if [[ ! -z $CONTAINER_ID ]]; then
  echo "Removing container"
  sudo docker kill $CONTAINER_ID > /dev/null
  sleep 1
  sudo docker rm $CONTAINER_ID > /dev/null
  sleep 1
fi

sudo docker run --name protractor --volume /vagrant/brickInventory:/opt/protractor/project --env TEST_FILE=test/e2e/protractor.conf.js --link nginx_bricks:web cfalguiere/protractor-firefox-headless