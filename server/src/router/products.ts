import { Request, Response, Router } from "express";
import fs from "fs";
import path from "path";

import ResponseHelper from "../helpers/responseHelper";
import { IProduct } from "../models/product";

const router = Router();

const getProducts = (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "..", "data", "shop-items.json");

  fs.readFile(filePath, "utf-8", (err, data) => {

    if (err) {
      console.error("Error reading JSON file:", err);
      return ResponseHelper.error({ res, err: "Error reading JSON file" });
    }

    try {
      const products = JSON.parse(data);

      return ResponseHelper.response({
          res,
          code: 200,
          success: true,
          message: "Successfully fetched products",
          data: products,
        },
      );
    } catch (parseError) {
      return ResponseHelper.error({ res, err: "Error parsing JSON file" });
    }
  });
};

const getSingleProduct = (req: Request, res: Response) => {
  const productId = req.params.productId;
  const filePath = path.join(__dirname, "..", "data", "shop-items.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return ResponseHelper.error({ res, err: "Error reading JSON file" });
    }

    try {
      const { items: products } = JSON.parse(data);
      const singleProductFromProductsArray = products.find((product: IProduct) => product.id === productId);

      console.log({ singleProductFromProductsArray });

      if (singleProductFromProductsArray != null) {
        return ResponseHelper.response({
            res,
            code: 200,
            success: true,
            message: `Successfully fetched product with id ${productId}`,
            data: singleProductFromProductsArray,
          },
        );
      }

      return ResponseHelper.response({
        res,
        code: 404,
        success: false,
        message: `Product with id (${productId}) not found`,
        data: {},
      });
    } catch (parseError) {
      return ResponseHelper.error({ res, err: "Error parsing JSON file" });
    }
  });
};

router.get("/:productId", getSingleProduct);
router.get("/", getProducts);

export default router;
