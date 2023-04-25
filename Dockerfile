# For react project we should specify base image which is node. 
FROM node:lastest

# then you have to specify working directory which is src in this case.
WORKDIR /src

# then you have to add projec file "package and package-lock json files"
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]