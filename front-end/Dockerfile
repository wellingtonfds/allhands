FROM node:13-alpine
LABEL maintainer "github/wellingtonfds"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Add package file
COPY package.json ./app/package.json

# Install deps
RUN npm i
RUN npm install react-scripts -g 

# Copy source
COPY . ./app

CMD ["npm", "start"]

# Expose port 3000
EXPOSE 3000