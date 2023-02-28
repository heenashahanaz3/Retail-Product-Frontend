#base image
FROM node:alpine

WORKDIR /usr/loginapp 
#helloapp(name of new folder)
 
#Copy build files
COPY ./package.json ./

#install dependencies
RUN npm install
COPY ./ ./

#Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

#startup Command
CMD /wait && ["npm","start"]

#docker build -t <anyname> .(loc)
#docker run -it <anyname>:version(latest)
#docker run -it -p 8080:8080 <name>