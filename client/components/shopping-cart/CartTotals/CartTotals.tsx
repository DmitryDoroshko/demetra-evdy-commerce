import Link from "next/link";
import { formatUSD } from "@/helpers/utils";

export function CartTotals({
  totalPrice,
  subtotalPrice,
  shippingFlatRate,
}: {
  totalPrice: number;
  shippingFlatRate: number;
  subtotalPrice: number;
}) {
  return (
    <>
      <div className="shopping-cart-full__content-right">
        <div className="shopping-cart-full__content-right-main">
          <h3 className="shopping-cart-full__content-right-heading shopping-cart-full__content-right--border-bottom">
            cart totals
          </h3>

          <div className="shopping-cart-full__content-right-flex shopping-cart-full__content-right--border-bottom">
            <span className="shopping-cart-full__content-right-text-heading shopping-cart-full__content-right-text-heading--1">
              Subtotals:
            </span>
            <span className="shopping-cart-full__content-right-price">
              {formatUSD(subtotalPrice)}
            </span>
          </div>

          <h3 className="shopping-cart-full__content-right-heading shopping-cart-full__content-right--border-bottom">
            Shipping
          </h3>

          <div className="shopping-cart-full__content-right-flex">
            <span className="shopping-cart-full__content-right-text-heading shopping-cart-full__content-right-text-heading--2">
              Flat Rate: ${formatUSD(shippingFlatRate)}
            </span>
          </div>

          <div className="shopping-cart-full__content-right-flex shopping-cart-full__content-right--border-bottom">
            <span className="shopping-cart-full__content-right-text-heading shopping-cart-full__content-right-text-heading--2">
              Where to: London, UK
            </span>
          </div>

          <div className="shopping-cart-full__content-right-flex">
            <h3 className="shopping-cart-full__content-right-heading">
              Total:
            </h3>
            <span className="shopping-cart-full__content-right-price">
              {formatUSD(totalPrice)}
            </span>
          </div>
        </div>

        <div className="shopping-cart-full__content-right-actions">
          <Link href={"/checkout"} className="shopping-cart-full__proceed-to-checkout-btn btn btn--grey">
            Proceed to checkout
          </Link>
          <Link
            href={"/shop"}
            className="shopping-cart-full__continue-shopping-btn btn btn--transparent-red"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
}
