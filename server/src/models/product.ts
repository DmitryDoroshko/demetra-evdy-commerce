import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProduct extends Document {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  imageAltText: string;
}

const ProductSchema = new Schema<IProduct>({
  id: { type: String, required: true },
  brand: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  imageAltText: { type: String, required: true },
}, {
  collection: 'products'
});

export const Product: Model<IProduct> = mongoose.model("Product", ProductSchema);
