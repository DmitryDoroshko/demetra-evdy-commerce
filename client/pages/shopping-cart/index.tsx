import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { ShoeItem } from "@/components/shopping-cart/ShoeItem/ShoeItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { selectCartItems, selectTotalPriceForAllItems } from "@/store/shopping-cart/shopping-cart.selectors";
import { ShoppingCartEmpty } from "@/components/shopping-cart/ShoppingCartEmpty/ShoppingCartEmpty";
import { ShoppingCartFull } from "@/components/shopping-cart/ShoppingCartFull/ShoppingCartFull";
import { useEffect } from "react";
import { fetchAllProducts } from "@/store/products/products.thunks";

export default function ShoppingCart() {
  const dispatch = useAppDispatch();
  const shoppingCartItems = useAppSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/shopping-cart.png"} imageAlternativeText={"Shopping cart"}
                     subtitle={"Home / Shopping cart"} title={"Shopping cart"} />


      {shoppingCartItems.length > 0 &&
        <ShoppingCartFull shoppingCartItems={shoppingCartItems} />}
      {shoppingCartItems.length > 0 && (

        <section className="discount">
          <div className="container">
            <div className="discount__inner">
              <h2 className="discount__heading">Discount</h2>
              <p className="discount__text">To apply your discount enter number of your coupon and press “Submit”
                button</p>

              <form className="discount__form">
                <input type="text" placeholder="Enter your coupon" className="discount__form-input" />
                <button type="submit" className="discount__submit-btn btn btn--grey">Submit</button>
              </form>
            </div>
          </div>
        </section>
      )}
      {shoppingCartItems.length === 0 && <ShoppingCartEmpty />}
    </>
  );
}
