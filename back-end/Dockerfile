FROM node:12
LABEL maintainer "github/wellingtonfds"

ARG DEPLOY='develop'

# Add package file
COPY package.json .

# Install deps
RUN npm i

# Copy source
COPY . .

CMD ["npm", "run", "start"]

# Expose port 3000
EXPOSE 3001
