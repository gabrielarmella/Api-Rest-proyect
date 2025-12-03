# 🛒 E-commerce API – Node.js, Express & MongoDB

Backend de un e-commerce construido con **Node.js**, **Express** y **MongoDB**, pensado como proyecto de portfolio.  
Incluye autenticación con JWT, roles de usuario (**user/admin**), gestión de productos, carrito de compras y órdenes.

---

## ✨ Features principales

- 👤 **Auth & usuarios**
  - Registro e inicio de sesión con email y contraseña
  - Contraseñas hasheadas con **bcrypt**
  - Tokens JWT con expiración
  - Roles: `user` y `admin`
  - Datos de perfil con direcciones de envío y facturación

- 📦 **Productos**
  - CRUD completo de productos (solo admin)
  - Borrado lógico (`active: false`)
  - Campos para e-commerce: `total`, `stock`, `category`, `brand`, `images`, `tags`, `isFeatured`
  - Endpoint público con **búsqueda, filtros y paginación**

- 🛒 **Carrito de compras**
  - Un carrito por usuario
  - Agregar productos al carrito
  - Actualizar cantidades
  - Eliminar items
  - Vaciar carrito

- 📑 **Órdenes**
  - Crear orden a partir del carrito (**checkout**)
  - Cálculo automático del `total`
  - Estados: `pendiente`, `pagado`, `enviado`, `entregado`, `cancelado`
  - Métodos de pago: `mercado_pago`, `transferencia`, `efectivo`
  - Órdenes del usuario logueado
  - Listado de todas las órdenes (solo admin)

---

## 🧱 Stack tecnológico

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** para autenticación
- **bcryptjs** para hash de contraseñas
- **dotenv** para variables de entorno
- **cors** para manejo de CORS
- **nodemon** para desarrollo

---

## 📂 Estructura del proyecto

```bash
src/
├── app.js
├── config/
│   └── db.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   ├── cart.model.js
│   └── order.model.js
├── routes/
│   ├── auth.router.js
│   ├── products.router.js
│   ├── cart.router.js
│   └── orders.router.js
└── middlewares/
    └── auth.middleware.js



## ⚙️ Instalación y configuración

### 1. Clonar repositorio

```bash
git clone https://github.com/gabrielarmella/Api-Rest-proyect.git
cd Api-Rest-proyect

### 2. Instalar dependencias

npm install

### 3. Crear archivo .env en la raíz

PORT=3000
MONGO_URI=mongodb://localhost:27017/ecommerce_portfolio
JWT_SECRET=un_secreto_bien_largo_y_seguro

###4. Ejecutar en desarrollo

npm run dev

###Servidor disponible en:

http://localhost:3000

## 📌 Endpoints principales

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Productos
- `GET /api/products` (público, con filtros y paginación)
- `GET /api/products/:id`
- `POST /api/products` (admin)
- `PUT /api/products/:id` (admin)
- `DELETE /api/products/:id` (admin)

### Carrito
- `GET /api/cart`
- `POST /api/cart/add`
- `PUT /api/cart/item/:productId`
- `DELETE /api/cart/item/:productId`
- `POST /api/cart/clear`

### Órdenes
- `POST /api/orders/checkout`
- `GET /api/orders/my`
- `GET /api/orders` (admin)