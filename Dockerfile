FROM node:slim

WORKDIR /home/app
ENV PORT 3000
USER node

EXPOSE 3000

ENTRYPOINT /bin/bash
