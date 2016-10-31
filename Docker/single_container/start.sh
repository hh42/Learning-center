#!/bin/sh

# Restart a stopped container

start () { 
   docker start $1
}

attach () { 
   docker attach $1
}

if [ -n "$1" ] ; then
	start $1
	attach $1
else
	echo "\n Usage: ./start.sh [container ID] \n"
fi

