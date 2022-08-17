FROM node:16

ADD package.json /tmp/package.json


ADD yarn.lock /tmp/yarn.lock


RUN rm -rf build

RUN cd tmp && yarn install

ADD ./ /src

RUN rm -rf src/node_modules && cp -a /tem/node_modules

WORKDIR /src

RUN yarn build

CMD ["node","/build/src/app.js"]
