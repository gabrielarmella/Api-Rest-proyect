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
