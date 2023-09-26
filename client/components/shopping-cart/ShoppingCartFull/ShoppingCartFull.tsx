import { ShoeItem } from "@/components/shopping-cart/ShoeItem/ShoeItem";
import { ICartItem } from "@/model/types";
import { useAppSelector } from "@/hooks/redux-hooks";
import {
  selectCartItemsLoading, selectShippingFlatRate,
  selectSubtotalPriceForAllItems,
  selectTotalPriceForAllItems,
} from "@/store/shopping-cart/shopping-cart.selectors";
import { CartTotals } from "@/components/shopping-cart/CartTotals/CartTotals";

export function ShoppingCartFull({
                                   shoppingCartItems,
                                 }: { shoppingCartItems: ICartItem[]; }) {
  const cartItemsLoading = useAppSelector(selectCartItemsLoading);
  const totalPriceForAllItems = useAppSelector(selectTotalPriceForAllItems);
  const subtotalPriceForAllItems = useAppSelector(selectSubtotalPriceForAllItems);
  const shippingFlatRate = useAppSelector(selectShippingFlatRate);

  if (cartItemsLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <main className="shopping-cart-full">
        <div className="container">
          <div className="shopping-cart-full__inner">
            <h2 className="shopping-cart-full__heading">Product</h2>
            <div className="shopping-cart-full__content">

              <div className="shopping-cart-full__content-left">
                {shoppingCartItems.map(item => {
                  return <ShoeItem key={item.id}
                                   amountOfMoneyForItems={item.amountOfMoneyForItems}
                                   itemCount={item.itemCount!}
                                   pictureSrc={item.image}
                                   name={item.name} />;
                })}
              </div>

              <CartTotals totalPrice={totalPriceForAllItems}
                          subtotalPrice={subtotalPriceForAllItems}
                          shippingFlatRate={shippingFlatRate} />
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
