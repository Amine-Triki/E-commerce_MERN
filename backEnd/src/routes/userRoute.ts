import express from "express";
import { getMyOrders, login, register } from "../services/userService.js";
import validateJWT from "../middlewares/validateJWT.js";
import { ExtendRequest } from "../types/extendedRequest.js";

const router = express.Router();

router.post("/register", async (request, response) => {
  try {
    const { firstName, lastName, email, password } = request.body;
    const { statusCode, data } = await register({
      firstName,
      lastName,
      email,
      password,
    });
    response.status(statusCode).json(data);
  } catch {
    response.status(500).send("something went wrong");
  }
});

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const { statusCode, data } = await login({ email, password });
    response.status(statusCode).json(data);
  } catch {
    response.status(500).send("something went wrong");
  }
});

router.get(
  "/my-orders",
  validateJWT,
  async (request: ExtendRequest, response) => {
    try {
      const userId = request?.user?._id;
      const { statusCode, data } = await getMyOrders({ userId });
      response.status(statusCode).json(data);
    } catch (error) {
      response.status(500).send("something went wrong");
    }
  }
);

export default router;
