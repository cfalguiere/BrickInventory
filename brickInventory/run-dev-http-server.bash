http-server -a $( hostname -I | cut -f1 -d' ') -p 8000 -c-1

