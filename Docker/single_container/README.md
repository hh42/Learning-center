# Docker
Use docker to set linux environment for easier project management

--  

#### Use shell script

  * restart a container :  
    - ./start.sh [container ID]  
  * run image in new container :  
    - ./run.sh [image ID] [exposed_container_port]  
  * build image with dockerfile :  
    - ./build.sh [image_name] [dockerfile_path] [exposed_port]"
    - if not define dockerfile_path set as '.'

#### Often used commands

  * checking ressources :
    - container list : docker ps [options]
    - images list : docker images
    - delete container : docker rm [name] [name] ...
    - delete image : docker rmi [name]

  * run pulled image : 
    - /!\ linked folder may cause some trouble due to restriction on mac side folder /!\
    - docker run -ti -p 80:80 -v /Users:/usr [image ID] /bin/bash

#### Connect to a running container
  * just connect
    - docker attach [container id] 
  * run command  
  - docker exec [options] [container id] [command]
  - ex : docker exec -ti [container id] bin/bash

#### Connect to stoppped container
  * restart he container : 
    - docker start [container id]
    - docker attach [container id]

#### Create image using Dockerfile  
  * edit build.sh file to adapt created image to your needs
    - created image/repository [name] : docker-test
    - path to Dockerfile atfer the [name] : '.'
    - shared folder between local and container [localFolder]:[inContainerFolder] : /Users:/tmp
  
  * some explanations about command lines and options :
    - docker run : create a new container in which the image is run
    - i tag : interactive mode -> Allow interact with image console trough local console
    - t tag : illocate a pseudo-tty (pseudo terminal)
    - v tag : allow to link folder in between local and container
    - p : associate port [local-machine-port]:[internal-container-port]
    - d : detached mode -> running in background, able to use terminal after launching other program i.e.
    --rm : Automatically remove the container when it exits (incompatible with -d)
    /bin/bash : run bash in image container
  
  * run shell file build.sh which contain command to build image
    - sh build.sh

#### Apply changes to local images  

  * new image with changes applied will be created with : docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
    - docker commit [container ID] : 
    - push the new image to update repo !

  * Some options : 
    - m : add some message with commit 
    - a: --author=""
    - p: --pause=true, Pause container during commit
    - Official doc. : https://docs.docker.com/engine/reference/commandline/commit/

#### Push image to Dockerhub

  * Put tag on image after canges : 
    - docker tag [OPTIONS] IMAGE[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]
    - exemple : docker-test | latest | sha256:597fb | 34 minutes ago | 125.1 MB  
    - docker tag 597fb vorgz/debian-dev-42:first-push  
  * Push to the repository
    - docker push vorgz/debian-dev-42 (repo name)
