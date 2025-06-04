import express from 'express';
import { getAllProducts } from '../services/productService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const product = await getAllProducts();
    res.status(200).send(product)
})


export default router;