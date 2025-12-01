import { Router } from "express";
import Product from "../models/product.model";

const router = Router();

// GET /api/products - Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({success: true, data: products});
    } catch (error) {
        res.status(500).json({success: false, message: "Error al obtener los productos"});
    };
    });

    // GET /api/products/:id - Obtener un producto por ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({success: false, message: "Producto no encontrado"});
        }
        res.json({success: true, data: product});
    } catch (error) {
        res.status(400).json({success: false, message: "ID de producto inválido"});
    }
});

//POST /api/products - Crear un nuevo producto

router.post("/", async (req, res) => {
    try {
        const {name, price, description, stock, category, active} = req.body;
    