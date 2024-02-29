# Imagen base de Node.js
FROM node:18

# Crea el directorio de la aplicación dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./
COPY server.js ./
COPY db.json ./
COPY routes.json ./

# Instala las dependencias del proyecto
RUN npm install

# Expone el puerto 3000 del contenedor
EXPOSE 8181

# Comando para iniciar la aplicación
CMD [ "node", "server.js" ]