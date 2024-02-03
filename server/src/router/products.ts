import { Request, Response, Router } from "express";

import ResponseHelper from "../helpers/responseHelper";
import { getSingleProductFromDbById, getAllProductsFromDb } from "../helpers/db";

const router = Router();

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProductsFromDb();

    console.log(products);

    return ResponseHelper.response({
        res,
        code: 200,
        success: true,
        message: "Successfully fetched products",
        data: products,
      },
    );
  } catch {
    return ResponseHelper.error({ res, err: "Error getting all products from database." });
  }
};

const getSingleProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  try {
    const productFromDb = await getSingleProductFromDbById(productId);

    if (productFromDb != null) {
      return ResponseHelper.response({
          res,
          code: 200,
          success: true,
          message: `Successfully fetched product with id ${productId}`,
          data: productFromDb,
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
  } catch {
    return ResponseHelper.error({ res, err: `Error fetching product with id: ${productId}` });
  }
};

router.get("/:productId", getSingleProductById);
router.get("/", getAllProducts);

export default router;
