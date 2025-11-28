# Use lightweight Node.js image
FROM node:alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the app
CMD ["npm", "start"]
