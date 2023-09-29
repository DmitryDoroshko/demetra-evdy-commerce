import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { WishlistEmpty } from "@/components/wishlist/WishlistEmpty/WishlistEmpty";
import { WishlistFull } from "@/components/wishlist/WishlistFull/WishlistFull";

export default function Wishlist() {

  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/wishlist.png"}
                     imageAlternativeText={"Wishlist image"}
                     subtitle={"Home / Wishlist"}
                     title={"wishlist"} />
      <WishlistFull />
      <WishlistEmpty />
    </>
  );
}
