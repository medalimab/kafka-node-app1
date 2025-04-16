FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install

# Ajout de l'installation de l'outil ping
RUN apt-get update && apt-get install -y iputils-ping

COPY src/ ./src/
EXPOSE 3000
CMD ["node", "src/index.js"]