import { Request, Response } from "express";
import ResponseHelper from "../helpers/responseHelper";
import { Order } from "../models/order";
import { ICartItem } from "../models/product";

export const createOrder = async (req: Request, res: Response) => {
  try {
    debugger;
    const { userId, items, userInfo } = req.body;

    if (!userId || !userInfo || !items || !items.length) {
      return ResponseHelper.error({
        res,
        err: "Invalid request data",
        status: 400,
      });
    }

    const totalAmount = items.reduce((sum: number, item: ICartItem) => {
      return sum + item.amountOfMoneyForItems;
    }, 0);

    const newOrder = new Order({
      userId,
      items,
      userInfo,
      totalAmount,
      status: "pending",
    });

    await newOrder.save();

    return ResponseHelper.response({
      res,
      code: 201,
      success: true,
      message: "Order created successfully",
      data: { order: newOrder },
    });

  } catch (error) {
    return ResponseHelper.error({
      status: 400,
      res,
      err: "Failed to create order"
    });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      return ResponseHelper.error({
        status: 404,
        res,
        err: "Order not found"
      });
    }

    return ResponseHelper.response({
      res,
      code: 201,
      success: true,
      message: "Order created successfully",
      data: { order },
    });
  } catch (error) {
    return ResponseHelper.error({
      status: 500,
      res,
      err: "Failed to fetch order"
    });
  }
};