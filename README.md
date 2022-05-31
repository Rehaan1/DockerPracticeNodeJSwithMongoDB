## Command Used

TO BUILD :- docker build -t trial-app .

TO RUN :- docker run -d -p 3000:3000 trial-app

TO CREATE NETWORK :- docker network create trial-app-network

TO RUN IN NETWORK :- docker run -d --network trial-app-network --network-alias app -p 3000:3000 trial-app

TO ADD NETWORKING ANALYSIS TOOL :- docker run -it --network trial-app-network nicolaka/netshoot

DNS COMMAND TO LOOK UP APP (using alias defined in line 9) IP ADDRESS INSIDE NETWORKING ANLYSIS TOOL :- dig app

TO RUN MONGODB CONTAINER IN SAME NETWORK :- docker run -d -p 27017:27017 --network trial-app-network --network-alias mongo --name mongodb mon
go:latest



