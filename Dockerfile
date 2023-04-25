# For react project we should specify base image which is node. 
FROM node:latest

# then you have to specify working directory which is src in this case.
WORKDIR /src

# then you have to add projec file "package and package-lock json files"
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