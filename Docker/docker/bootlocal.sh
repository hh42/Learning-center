mkdir /var/www
mount -t vboxsf www /var/www
cp /var/www/docker/docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose