# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/angular-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d
RUN rm -rf /etc/nginx/conf.d/default.conf
EXPOSE 80