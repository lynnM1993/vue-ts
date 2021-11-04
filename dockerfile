FROM node AS build_stage
WORKDIR /app
COPY . /app/ 
RUN npm install 
RUN npm run build

FROM nginx AS run_stage
COPY  --from=build_stage  /app/dist /usr/share/nginx/html
COPY  --from=build_stage /app/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]