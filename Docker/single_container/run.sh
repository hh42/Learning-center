#!/bin/sh
# Usages : ./run.sh [image ID] [container port]
# By default [container port] matched with host port 80

# -n : non-zero string length
# -z : szero string length

#$1 here is the first argument passed to this function
expose_port () { 
	docker run -it -p $2:80 -v ~/Documents/www:/var/www/html $1 /bin/zsh
}

if [ -n "$1" ] ; then
	if [ -n "$2" ] ; then
		expose_port $1 $2
	else
		docker run -it $1 /bin/zsh
	fi
else
	echo "\n Usage: ./run.sh [image ID] [exposed_container_port] \n"
fi

