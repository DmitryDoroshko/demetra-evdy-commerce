import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { WishlistEmpty } from "@/components/wishlist/WishlistEmpty/WishlistEmpty";
import { WishlistFull } from "@/components/wishlist/WishlistFull/WishlistFull";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { selectWishlistItems } from "@/store/wishlist/wishlist.selectors";
import { useEffect } from "react";
import { fetchAllProducts } from "@/store/products/products.thunks";

export default function Wishlist() {
  const wishListItems = useAppSelector(selectWishlistItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/wishlist.png"}
                     imageAlternativeText={"Wishlist image"}
                     subtitle={"Home / Wishlist"}
                     title={"wishlist"} />
      {wishListItems?.length > 0 && <WishlistFull wishlistItems={wishListItems} />}
      {wishListItems?.length === 0 && <WishlistEmpty />}
    </>
  );
}
