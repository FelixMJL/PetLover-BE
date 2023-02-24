# Base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Set environment variables
ENV CONNECTION_STRING=${MONGODB_URI}

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3000

# Run the application
CMD [ "npm", "run", "dev" ]