FROM node

WORKDIR /app/frontend
COPY . /app/frontend

RUN yarn install

EXPOSE 3000
CMD ["yarn", "start"]