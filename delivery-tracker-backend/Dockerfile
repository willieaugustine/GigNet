# Use an official Node.js runtime as a base
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5000

# Run the app
CMD ["node", "index.js"]

