import mongoose from "mongoose";
import { IProduct, Product } from "../models/product";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Successfully connected to Mongodb");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

const getAllProductsFromDb = async (): Promise<IProduct[]> => {
  try {
    const products = await Product.find({});
    console.log('getAllProductsFromDb', { products });
    return products;
  } catch (error) {
    throw new Error("Error fetching products from MongoDB");
  }
};

const getSingleProductFromDbById = async (productId: string): Promise<IProduct | null> => {
  try {
    const product = await Product.findOne({ id: productId });
    return product;
  } catch (error) {
    throw new Error("Error fetching single product from MongoDB");
  }
};

export { getAllProductsFromDb, getSingleProductFromDbById, connectDB };
