import { Schema, model, Document } from "mongoose";
import { TransferOptionEnum } from "../types/order";

export interface IUserInfo {
  name: string;
  surname: string;
  country: string;
  city: string;
  address: string;
  email: string;
  zipcode: string;
  transferOption: TransferOptionEnum;
  companyName?: string;
  phoneNumber?: string;
}

export interface IOrder extends Document {
  userId: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
  userInfo: IUserInfo;
}

const OrderSchema = new Schema<IOrder>({
  userId: { type: String, required: true },
  items: [
    {
      id: { type: String, required: true },
      itemCount: { type: Number, required: true },
      amountOfMoneyForItems: { type: Number, required: true },
      description: { type: String, required: true },
    },
  ],
  userInfo: {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    zipcode: { type: String, required: true },
    transferOption: { type: String, enum: Object.values(TransferOptionEnum), required: true },
    companyName: String,
    phoneNumber: String,
  },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const Order = model<IOrder>("Order", OrderSchema);
