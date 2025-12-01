import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import productsRouter from "./routes/products.js";  

dotenv.config();

const app = express ();

//Middlewares
app.use(cors());
app.use(express.json());


//Conexion a la base de datos
connectDB();

//Ruta base
app.get("/", (req, res) => {
    res.json({ message: "API REST funcionando correctamente" });
});
//Rutas
app.use("/api/products", productsRouter);

//Levanta el servidor
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado");
});

    