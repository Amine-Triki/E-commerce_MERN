import express from 'express';
import { getAllProducts } from '../services/productService.js';

const router = express.Router();

router.get('/', async (req, res) => {
try {
    const product = await getAllProducts();
    res.status(200).send(product)
} catch  {
        res.status(500).send("something went wrong");

}
})


export default router;