import express from "express";
import {
  addItemToCart,
  getActiveCartForUser,
  updateItemInCart,
} from "../services/cartService.js";
import validateJWT from "../middlewares/validateJWT.js";
import { ExtendRequest } from "../types/extendedRequest.js";

const router = express.Router();

router.get("/", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req.user._id;
  const cart = await getActiveCartForUser({ userId });
  res.status(200).send(cart);
});

router.post("/items", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;
  const reponse = await addItemToCart({
    userId,
    productId,
    quantity,
  });
  res.status(reponse.statusCode).send(reponse.data);
});

router.put("/items", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req?.user?._id;
  const { productId, quantity } = req.body;
  const reponse = await updateItemInCart({ userId, productId, quantity });
  res.status(reponse.statusCode).send(reponse.data);
})
export default router;
