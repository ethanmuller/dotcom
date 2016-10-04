FROM smebberson/alpine-nginx-nodejs:4.2.2

RUN npm install gulp -g

RUN mkdir /src

WORKDIR /workspace

ADD package.json .
ADD src/ src/
RUN npm install
ADD Gulpfile.js .
RUN gulp

RUN rm -rf /usr/html
RUN cp -R build /usr/html

# Remove workspace to decrease image size
RUN rm -rf /workspace
