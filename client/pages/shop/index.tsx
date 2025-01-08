import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { Shop } from "@/components/shop/Shop/Shop";
import { useEffect } from "react";
import { fetchAllProducts } from "@/store/products/products.actions";
import { useAppDispatch } from "@/hooks/redux-hooks";

export default function ShopPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <MainSecondary
        image={"/assets/img/main-secondary/shop.png"}
        imageAlternativeText={"Shop picture"}
        subtitle={"Home / Shop"}
        title={"Shop"}
      />
      <Shop />
    </>
  );
}
