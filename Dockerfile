# For react project we should specify base image which is node. 
FROM node:latest

# then you have to specify working directory which is src in this case.
WORKDIR /src

# then you have to add projec file "package and package-lock json files"
# we use * after package to include package and all after it. means that we use this for adding "package.json and package-lock.json"
COPY package*.json ./

# then run npm install to install dependencies in container
RUN npm install

# then we should copy rest of the project files into container
COPY . .

# then we have to build the repo
RUN npm run build

# then we have to expose built repo in some port
EXPOSE 3000

# then we have to start the project in container
CMD ["npm", "start"]


# points: How to reflect your local changes into your live container
# if you want your local changes reflect on your live container you have to use bind mount your container to your code. 
# you can use this with -v flag. so the whole command is this: docker run -v $(pwd):/src -p 3000:3000 sample-repo
# $(pwd) is for finding your current directory which is your local code directory.

# commands need to build your docker container from sckrach to end: 
# after completing configuration on this file you have to run commands below: 
# 1. "docker build -t <your container name> ." The "." at the end is for using current directory as a build context. 
# 2. docker run -d -p 3000:3000 <name of your container>
# if you want your local source code reflect on container live, follow the points above. 

# flags documentation
# -p 3000:3000 => is for mirroring the port of your container to the port of your host (means the machine that you are running the container on)
# -d => used for detach the contaner live cycle out of your current terminal. so if you close your terminal the container continue living, 
# -t => means tag and used for naming your container so if you name like audrey as a tag. it will register on dockerhub and identifier with this name and also get listed with this name. 
# -v => is used for bind mount and make your local source code be reflected on your live container.