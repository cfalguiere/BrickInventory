sudo docker run --rm  --name protractor_bricks  -v /vagrant:/opt/bricks --link nginx_bricks:web protractor_bricks_image
