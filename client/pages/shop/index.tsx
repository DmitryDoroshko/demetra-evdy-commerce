import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { Shop } from "@/components/shop/Shop/Shop";

export default function ShopPage() {

  return <>
    <MainSecondary image={"/assets/img/main-secondary/shop.png"}
                   imageAlternativeText={"Shop picture"}
                   subtitle={"Home / Shop"}
                   title={"Shop"} />
    <Shop />
  </>;
}
