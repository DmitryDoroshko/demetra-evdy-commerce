import { Request, Response } from "express";
import { IUser, IUserLogin } from "../types/user";
import User from "../models/user";
import ResponseHelper from "../helpers/responseHelper";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { JWT_EXPIRATION_TIME } from "../helpers/constants";
import Token from "../models/token";

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password, role }: IUser = req.body;

  const emailAlreadyExists = await User.findOne({ email: email });

  if (emailAlreadyExists) {
    return ResponseHelper.response({
      res,
      code: 400,
      success: false,
      message: "Email already in use.",
      data: {},
    });
  }

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
      username,
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

export const signIn = async (req: Request, res: Response) => {
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

    const token = jwt.sign({
      id: user._id,
      role: user.role,
    }, process.env.JWT_SECRET as string, { expiresIn: JWT_EXPIRATION_TIME });

    return ResponseHelper.response({
      res,
      code: 200,
      success: true,
      message: "Successfully logged in!",
      data: {
        token,
        user: {
          id: user._id,
          name: user.username,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    return ResponseHelper.error({ res, err: error });
  }
};

export const getUser = async (req: Request, res: Response) => {
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

export const signOut = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return ResponseHelper.response({
        res,
        code: 400,
        success: false,
        message: "Token is required",
        data: {},
      });
    }

    const tokenObj = new Token({ token });
    await tokenObj.save();

    return ResponseHelper.response({
      res,
      code: 200,
      success: true,
      message: "Successfully signed out!",
      data: {},
    });
  } catch (error) {
    return ResponseHelper.error({ res, err: error });
  }
};