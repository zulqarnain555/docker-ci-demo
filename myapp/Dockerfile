# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy app files
COPY package*.json ./
RUN npm install
COPY . .

# App runs on port 3200
EXPOSE 3200

# Start the app
CMD ["node", "server.js"]
