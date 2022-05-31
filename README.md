## Command Used

TO BUILD :- docker build -t trial-app .

TO RUN :- docker run -d -p 3000:3000 trial-app

TO CREATE NETWORK :- docker network create trial-app-network

TO RUN IN NETWORK :- docker run -d --network trial-app-network --network-alias app -p 3000:3000 trial-app

TO ADD NETWORKING ANALYSIS TOOL :- docker run -it --network trial-app-network nicolaka/netshoot

DNS COMMAND TO LOOK UP APP (using alias defined in line 9) IP ADDRESS INSIDE NETWORKING ANLYSIS TOOL :- dig app

TO RUN MONGODB CONTAINER IN SAME NETWORK :- docker run -d -p 27017:27017 --network trial-app-network --network-alias mongo --name mongodb mon
go:latest

TO RENAME :- docker tag trial-app rehaanmazid009/trial-app

TO PUSH TO DOCKER HUB :- docker push rehaanmazid009/trial-app

-----------------------------------------------------
## FOR DEFINING NETWORK IN DOCKER COMPOSE
-----------------------------------------------------
services on the same Docker network can find each other by using service names as DNS names. Use that to reference the specific container you described, including when it references itself.

For example, in the following made up Docker Compose file, if someservice was a web server serving on port 80, anotherservice service would be able to connect to it at http://someservice/, because they're on a common network the_net.

version: '3'

services:
  someservice:
    image: someserviceimage
    networks:
      - the_net

  anotherservice:
    image: anotherserviceimage
    networks:
      - the_net

networks:
  the_net:
someservice can also reach itself at http://someservice/