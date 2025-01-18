import { Product } from "../models/product";
import path from "path";
import fs from "fs";
import connectDB from "../helpers/db";

const seedProducts = async () => {
  await connectDB();

  const filePath = path.join(__dirname, "..", "data", "shop-items.json");

  let products: any[] = [];

  fs.readFile(filePath, "utf-8", (err, data) => {
    products = JSON.parse(data).items;
  });

  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Database seeded successfully");
    process.exit();
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedProducts();
