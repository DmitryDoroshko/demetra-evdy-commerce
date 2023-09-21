import { Router } from "express";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import User from "../models/user";
import ResponseHelper from "../helpers/responseHelper";
import { IUser, IUserLogin } from "../types/User";
import { authorize } from "../middleware/auth";

const router = Router();

export const register = async (req: Request, res: Response) => {
  const { user_name, email, password, role }: IUser = req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return ResponseHelper.response({
        res,
        code: 400,
        success: false,
        message: "Failed",
        data: {},
      });
    }

    const userObj = new User({
      user_name,
      email,
      password,
      role,
    });

    await userObj.save();
    return ResponseHelper.response({
      res,
      code: 201,
      success: true,
      message: "User registered!",
      data: {},
    });

  } catch (error) {
    return ResponseHelper.error({ res, err: error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: IUserLogin = req.body;
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ResponseHelper.response({
        res,
        code: 400,
        success: false,
        message: "Failed",
        data: {
          errors: errors.array(),
        },
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return ResponseHelper.response({
        res,
        code: 404,
        success: false,
        message: "Email is invalid",
        data: {},
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return ResponseHelper.response({
        res,
        code: 400,
        success: false,
        message: "Password is invalid",
        data: {},
      });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string);

    return ResponseHelper.response({
      res,
      code: 200,
      success: true,
      message: "Successfully logged in!",
      data: {
        token,
        user: {
          name: user.user_name, role: user.role,
        },
      },
    });
  }
  catch (error) {
    return ResponseHelper.error({ res, err: error });
  }
};

export const profile = async (req: Request, res: Response) => {
  const { id } = req.body.user;
  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      return ResponseHelper.response({
        res,
        code: 404,
        success: false,
        message: "User not found",
        data: {},
      });
    }

    return ResponseHelper.response({
      res,
      code: 200,
      success: true,
      message: "User found",
      data: { user },
    });
  } catch (error) {
    return ResponseHelper.error({ res, err: error });
  }
};

router.get("/", authorize, profile);
router.post("/", register);
router.post("/sign-in", login);

export default router;
