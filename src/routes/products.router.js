import { Router } from "express";
import Product from "../models/product.model.js";

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

        if (!name || price == null || stock == null) {
            return res 
            .status(400)
            .json({success: false, message: "Faltan campos obligatorios: name, price, stock"});
        }
        const newProduct = await Product.create({
            name,
            price,
            description,
            stock,
            category,
        });
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: "Error al crear el producto"});
    }
});

// PUT /api/products/:id - Actualizar un producto 
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}// Devuelve el documento actualizado
        );
    
        if (!updatedProduct) {
            return res.status(404).json({success: false, message: "Producto no encontrado"});
        }
        res.json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(400).json({success: false, message: "ID de producto inválido"});
    }
});

// DELETE /api/products/:id - Eliminar un producto
router.delete("/:id", async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(
            req.params.id,
            {active: false},
            {new: true}
        );

        if (!deletedProduct) {
            return res.status(404).json({success: false, message: "Producto no encontrado"});
        }
        res.json({success: true, message: "Producto eliminado correctamente", data: deletedProduct});
    } catch (error) {
        res.status(400).json({success: false, message: "ID de producto inválido"});
    }   
});

export default router;