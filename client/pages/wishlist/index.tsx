import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { WishlistEmpty } from "@/components/wishlist/WishlistEmpty/WishlistEmpty";
import { useAppSelector } from "@/hooks/redux-hooks";
import { selectWishlistItemsCount } from "@/store/wishlist/wishlist.selectors";
import { WishlistFull } from "@/components/wishlist/WishlistFull/WishlistFull";

export default function Wishlist() {
  const wishlistItemsCount = useAppSelector(selectWishlistItemsCount);

  return (
    <>
      <MainSecondary
        image={"/assets/img/main-secondary/wishlist.png"}
        imageAlternativeText={"Wishlist page picture"}
        subtitle={"Home / Wishlist"}
        title={"Wishlist"} />
      {wishlistItemsCount > 0 && <WishlistFull />}
      {wishlistItemsCount === 0 && <WishlistEmpty />}
    </>
  );
}