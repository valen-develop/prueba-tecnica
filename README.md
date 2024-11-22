## Tecnologías utilizadas

- **Backend**:
  - Node.js
  - Express.js
  - Socket.io
  - MongoDB
- **Frontend**:
  - React
  - Tailwind CSS
- **API externa**: [NewsAPI](https://newsapi.org/)

## Funcionalidades

- **Visualizar noticias**: Los usuarios pueden noticias.
- **Archivar noticias**: Permite archivar noticias en el sistema.
- **Eliminar noticias**: Los usuarios pueden eliminar las noticias archivadas.
- **Agregar nueva noticia**: Los usuarios pueden añadir noticias manualmente.

## Instalación

### Requisitos previos

1. Tener [Node.js](https://nodejs.org/) y [MongoDB](https://www.mongodb.com/es) instalado.
2. Tener acceso a la API externa de noticias ([NewsAPI](https://newsapi.org/)) (usar el API_KEY del .env.example).

### Pasos para la instalación y configuración del proyecto

#### Backend

1. Navega al directorio del backend:

   ```bash
   cd api
   npm install
   ```

   Crea un archivo .env en el directorio api con las siguientes variables de entorno:

   ```
    PORT=3001
    NEWS_API_KEY=f005bea9742e4a69a174c3fbd11392ee
    NEWS_API_URL=https://newsapi.org/v2/everything
    NODE_ENV=development
   ```

   Inicia el servidor del backend:

   ```
   npm run dev
   ```

#### Frontend

1. Navega al directorio del frontend

```bash
  cd front
  npm install
```

2. Inicia el proyecto

```
 npm run start dev
```
