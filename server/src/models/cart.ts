import mongoose, { Document, Model, Schema } from "mongoose";
import { IProduct } from "./product";

export interface ICartItem extends IProduct {
  itemCount?: number;
  description: string;
}

const CartItemSchema = new Schema<ICartItem & Document>({
  id: { type: String, required: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  imageAltText: { type: String, required: true },
  itemCount: { type: Number, default: 1 }, // Default to 1 if not provided
  description: { type: String, required: true },
});

export const CartItemModel: Model<ICartItem & Document> = mongoose.model("CartItem", CartItemSchema);