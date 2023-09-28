import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux-hooks";

import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { fetchAllProducts } from "@/store/products/products.thunks";
import { Shop } from "@/components/shop/Shop/Shop";

export default function ProductPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/product.png"}
                     imageAlternativeText={"Shop picture"}
                     subtitle={"Home / Shop"}
                     title={"Shop"} />

      <Shop/>
    </>
  );
}
