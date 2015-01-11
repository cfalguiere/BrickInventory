sudo docker rm  protractor_bricks
sudo docker run  --name protractor_bricks  -v /vagrant:/opt/bricks --link nginx_bricks:web protractor_bricks_image
