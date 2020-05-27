FROM mhart/alpine-node:12.16.3

WORKDIR /app

ENV NODE_PATH /app/node_modules/
ENV PATH /app/node_modules/.bin:$PATH

RUN apk --no-cache add g++ gcc libgcc\
    libstdc++ linux-headers make python openjdk8

# RUN yarn global add webdriverio@latest

COPY package.json /app/
# RUN yarn install
RUN npm install
RUN mv package-lock.json /app/
# RUN mv yarn.lock /app/
# RUN rm -rf /install/node_modules

COPY wdio.conf.js /app/wdio.conf.js
COPY features /app/features
COPY babel.config.js /app/babel.config.js