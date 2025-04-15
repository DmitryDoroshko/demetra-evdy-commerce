import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  id: string;
  brand: string;
  name: string;
  price: number;
  imageAltText: string;
  image: string;
  description: string;
}

export interface ICartItem extends IProduct {
  itemCount?: number;
  amountOfMoneyForItems: number;
}

const ProductSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageAltText: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  inStock: { type: Boolean, required: true },
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);

