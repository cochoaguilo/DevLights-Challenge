# DevLights Challenge

Aplicación full stack que muestra ofertas de videojuegos de Steam, con búsqueda por título. Se compone de un servidor **Express** que sirve los datos desde un JSON y un cliente **React + Chakra UI**.

## Funcionalidades

- Listado de juegos en oferta con imagen, precio normal, precio con descuento y puntuación (estrellas).
- Búsqueda de juegos por título.
- Filtrado de ofertas por precio desde la API.

## Tecnologías

- **Cliente**: React 17, Chakra UI, Axios, react-star-rating-component (Create React App)
- **Servidor**: Node.js, Express, CORS

## Estructura

```
├── client/                       # app React
│   └── src/
│       ├── App.js
│       └── Components/           # Navbar, Filter, ListadoGames, Game, Footer
└── server/                       # API Express
    ├── index.js
    ├── routes/deals.routes.js
    ├── controllers/deals.controllers.js
    └── json/deals.json           # datos de las ofertas
```

## API

El servidor corre en `http://localhost:3500`.

| Método | Ruta                          | Descripción                                    |
| ------ | ----------------------------- | ---------------------------------------------- |
| GET    | `/deals`                      | Devuelve todas las ofertas                     |
| GET    | `/deals/title?title=<texto>`  | Ofertas cuyo título contiene `<texto>`         |
| GET    | `/deals/sale?sale=<precio>`   | Ofertas con precio de venta mayor a `<precio>` |

## Cómo correrlo

Requisitos: Node.js y npm.

1. Levantar el servidor:

   ```bash
   cd server
   npm install
   node index.js
   ```

2. En otra terminal, levantar el cliente:

   ```bash
   cd client
   npm install
   npm start
   ```

3. Abrir [http://localhost:3000](http://localhost:3000).
