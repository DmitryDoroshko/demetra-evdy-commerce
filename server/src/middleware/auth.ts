import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import ResponseHelper from "../helpers/responseHelper";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization!.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET as string);
    req.body.user = decode;
    next();
  } catch (error) {
    return ResponseHelper.response({
      res,
      code: 401,
      success: false,
      message: "Invalid request!",
      data: {},
    });
  }
};

