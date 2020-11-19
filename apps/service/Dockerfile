FROM node:14

ENV WORKING_DIR=/usr/src/app

RUN mkdir -p ${WORKING_DIR}
WORKDIR ${WORKING_DIR}
COPY . ${WORKING_DIR}

RUN npm install

RUN chown -R node:node "$WORKING_DIR"

EXPOSE 3002

CMD sh -c 'npm run start'