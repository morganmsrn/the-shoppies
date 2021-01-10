# Build app with dependencies

FROM node:alpine as build-dependencies
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Serve with nginx

FROM nginx:stable
COPY --from=build-dependencies /usr/src/app/build /usr/share/nginx/html
