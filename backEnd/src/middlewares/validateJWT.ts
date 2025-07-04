import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { ExtendRequest } from "../types/extendedRequest.js";



const validateJWT = async (
  req: ExtendRequest,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.get("Authorization");

  if (!authorizationHeader) {
    res.status(403).send("Authorization header was not provided");
    return;
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    res.status(403).send("Bearer token not found");
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET!, async (err, payload) => {
    if (err) {
      res.status(403).send("Invalid token");
      return;
    }

    if (!payload) {
      res.status(403).send("invalid token payload ");
      return;
    }

    const userPlayload = payload as {
      email: string;
      firstName: string;
      lastName: string;
    };

    //fetch user from database based on the payload
    const user = await userModel.findOne({ email: userPlayload.email });
    req.user = user;
    next();
  });
};

export default validateJWT;
