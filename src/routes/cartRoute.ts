import express from "express";
import { Request, Response } from "express";
import { getActiveCartForUser } from "../services/cartService.js";
import validateJWT from "../middlewares/validateJWT.js";

const router = express.Router();

interface ExtendRequest extends Request {
  user?: any;
}

router.get("/", validateJWT, async (req: ExtendRequest, res: Response) => {
  const userId =  req.user._id;
  const cart = await getActiveCartForUser({ userId });
  res.status(200).send(cart);
});

export default router;
