FROM node:12

WORKDIR /home/scholastic
COPY . /home/scholastic
RUN npm install
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 1221

CMD ["npm","start"]