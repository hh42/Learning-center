#!/bin/sh

# Restart a stopped container

build () {

if [ -n "$2" ] ; then
	docker build -t $1 $2
else
	docker build -t $1 .
fi

}

expose_port () { 
   docker run -it -p $2:80 $1 /bin/zsh
}

run () {

	if [ -n "$1" ] ; then
		if [ -n "$2" ] ; then
			expose_port $1 $2
		else
			docker run -it $1 /bin/bash
		fi
	else
		echo "\n Usage: ./run.sh [image ID] [exposed_container_port] \n"
	fi

}

if [ -n "$1" ] ; then
	build $1 $2
	run $1 $2	
else
	echo "\n Usage: ./build.sh [image_name] ([dockerfile_path] [exposed_port])"
	echo "-> if not defined dockerfile_path is set as '.' by default \n" 
fi

