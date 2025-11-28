# Use lightweight Node.js image
FROM node:alpine3.18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Expose port 4000
EXPOSE 4000

# Start the app
CMD ["node", "src/server.js"]
