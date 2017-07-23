FROM mhart/alpine-node

COPY . /app
WORKDIR /app/public

#first build the frontend components
RUN npm install

#next, build the server components then run
WORKDIR /app

RUN npm install

CMD ["npm", "start"]
