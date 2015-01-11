echo "###################################"
echo "# copying app"
#cp -R ../brickInventory/app/ ./content/
rsync -avzh ../brickInventory/app ./content/

echo "###################################"
echo "# removing old container and image"
sudo docker stop nginx_bricks
sudo docker rm nginx_bricks
sudo docker rmi nginx_bricks_image

echo "###################################"
echo "# building container"
bash build.bash

echo "###################################"
echo "# unning container"
bash run.bash

echo "###################################"
echo "# Server is up and running. Point your browser at http://localhost:1080/"