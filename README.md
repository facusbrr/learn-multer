# Práctica subida de archivos

## Instalación

## Dependencias

### Frontend

- Vite
- Tailwincss
- Postcss
- Autoprefixer

### Backend

- Express
- Morgan
- Cors
- Multer
- Zod
- Crypto
- Path

## Clonar el repositorio

```sh
git clone https://github.com/facusbrr/learn-multer
cd multer-learn
```

### Navega hasta el directorio del Cliente

```sh
cd client
npm install
npm run dev
```

### Navega hasta el Servidor

```sh
cd server
npm install
npm run dev
```

## Uso

### Subida de Imagénes

1. Abre el navegador y navega a http://localhost:5173/
2. Llena el formulario con el nombre del producto, descripción, precio y selecciona una imagen.
3. Haz clic en "Submit" para subir la imagen y crear el producto.

## Decisiones Tomadas

### Multer

El archivo `uploadConfig.js` en el servidor configura multer para almacenar las imágenes subidas en el directorio `uploads`.

### Zod

El archivo `productSchema.js` utiliza zod para validar los datos del producto.
