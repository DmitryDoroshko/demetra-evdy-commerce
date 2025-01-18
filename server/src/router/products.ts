import { Request, Response, Router } from "express";

import ResponseHelper from "../helpers/responseHelper";
import { Product } from "../models/product";

const router = Router();

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find(); // Fetch all products
    return ResponseHelper.response({
      res,
      code: 200,
      success: true,
      message: "Successfully fetched products",
      data: products,
    });
  } catch (err) {
    console.error("Error fetching products:", err);
    return ResponseHelper.error({ res, err: "Error fetching products" });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const product = await Product.findOne({ id: productId }); // Fetch product by ID
    if (!product) {
      return ResponseHelper.response({
        res,
        code: 404,
        success: false,
        message: `Product with id (${productId}) not found`,
        data: {},
      });
    }

    return ResponseHelper.response({
      res,
      code: 200,
      success: true,
      message: `Successfully fetched product with id ${productId}`,
      data: product,
    });
  } catch (err) {
    console.error("Error fetching product:", err);
    return ResponseHelper.error({ res, err: "Error fetching product" });
  }
};

router.get("/:productId", getSingleProduct);
router.get("/", getProducts);

export default router;
