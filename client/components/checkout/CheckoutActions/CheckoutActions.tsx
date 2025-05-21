import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "@/hooks/redux-hooks";
import {
  selectCartItems,
  selectShippingFlatRate,
  selectTotalPriceForAllItems,
} from "@/store/shopping-cart/shopping-cart.selectors";
import { RootState } from "@/store";
import { checkoutService } from "@/service/checkout/checkout-service";
import { notification } from "@/helpers/utils";

enum TransferOptionEnum {
  directBankTransfer = "directBankTransfer",
  checkPayment = "checkPayment",
  cashOnDelivery = "cashOnDelivery",
}

type CheckoutFormInputs = {
  name: string,
  surname: string,
  companyName: string,
  country: string,
  city: string,
  address: string,
  phoneNumber: string,
  email: string,
  zipcode: string,
  transferOption: TransferOptionEnum,
};

export function CheckoutActions({ onSuccess }: { onSuccess: () => void; }) {
  const cartItems = useAppSelector(selectCartItems);
  const subtotals = useAppSelector((state: RootState) => state.shoppingCart.subtotalPriceForAllItems);
  const shippingFlatRate = useAppSelector(selectShippingFlatRate);
  const totalPriceForAllItems = useAppSelector(selectTotalPriceForAllItems);
  const user = useAppSelector(state => state.auth.user);
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormInputs>();

  const renderedCartItemsSummaries = cartItems.map(item => (
    <div key={item.id} className="totals__content-right-flex">
      <span className="totals__content-right-heading">{item.name}</span>
      <span className="totals__content-right-price">${item.price}</span>
    </div>
  ));

  const onSubmit: SubmitHandler<CheckoutFormInputs> = async (userInfo) => {
    if (!user) {
      notification("User needs to be logged in.", "warning");
      return;
    }

    try {
      await checkoutService.createOrder({ items: cartItems, userId: user.id, userInfo: userInfo });
      onSuccess();
    } catch {
      notification("Error occurred...", "error");
    }
  };

  return (
    <main className="checkout">
      <div className="container">
        <div className="checkout__inner">
          <h2 className="checkout__heading-main">Billing Details</h2>
          <form className="checkout__content" onSubmit={handleSubmit(onSubmit)}>

            <div className="checkout__left">
              <div className="checkout__action checkout__action--name">
                <label htmlFor="name" className="checkout__label">Name*</label>
                <input type="text" id="name" className="checkout__input" {...register("name", { required: true })} />
                {errors.name && <p role="alert">Name field is required.</p>}
              </div>

              <div className="checkout__action checkout__action--surname">
                <label htmlFor="surname" className="checkout__label">Surname*</label>
                <input type="text" id="surname"
                       className="checkout__input" {...register("surname", { required: true })} />
                {errors.surname && <p role="alert">Surname field is required.</p>}
              </div>

              <div className="checkout__action checkout__action--company-name">
                <label htmlFor="company-name" className="checkout__label">Company Name</label>
                <input type="text" id="company-name" className="checkout__input" {...register("companyName")} />
              </div>

              <div className="checkout__action checkout__action--country">
                <label htmlFor="country" className="checkout__label">Country*</label>
                <input type="text" id="country"
                       className="checkout__input" {...register("country", { required: true })} />
                {errors.country && <p role="alert">Country field is required.</p>}
              </div>

              <div className="checkout__action checkout__action--city">
                <label htmlFor="city" className="checkout__label">City*</label>
                <input type="text" id="city" className="checkout__input" {...register("city", { required: true })} />
                {errors.city && <p role="alert">City field is required.</p>}
              </div>

              <div className="checkout__action checkout__action--address">
                <label htmlFor="address" className="checkout__label">Address*</label>
                <input type="text" id="address"
                       className="checkout__input" {...register("address", { required: true })} />
                {errors.address && <p role="alert">Address field is required.</p>}
              </div>

              <div className="checkout__action checkout__action--phone-number">
                <label htmlFor="phone-number" className="checkout__label">Phone Number</label>
                <input type="tel" id="phone-number" className="checkout__input" {...register("phoneNumber")} />
              </div>

              <div className="checkout__action checkout__action--email">
                <label htmlFor="email" className="checkout__label">E-Mail*</label>
                <input type="email" id="email" className="checkout__input" {...register("email", { required: true })} />
                {errors.email && <p role="alert">Email field is required.</p>}
              </div>

              <div className="checkout__action checkout__action--zip">
                <label htmlFor="zip" className="checkout__label">Zip code / Post code*</label>
                <input type="number" id="zip"
                       className="checkout__input" {...register("zipcode", { required: true })} />
                {errors.zipcode && <p role="alert">Zipcode field is required.</p>}
              </div>
            </div>

            <div className="checkout__right">

              <div className="checkout__totals totals">
                <div className="totals__content-right-main">

                  <h3 className="totals__content-right-sub-heading totals__content-right--border-bottom">products</h3>

                  {renderedCartItemsSummaries}

                  <div className="totals__content-right-flex totals__content-right--border-bottom">
                      <span
                        className="totals__content-right-text-heading totals__content-right-text-heading--1">Subtotals:</span>
                    <span className="totals__content-right-price">${subtotals}</span>
                  </div>

                  <h3 className="totals__content-right-heading">
                    Shipping</h3>

                  <div className="totals__content-right-flex totals__content-right--border-bottom">
                    <span className="totals__content-right-text-heading totals__content-right-text-heading--2">Flat Rate: ${shippingFlatRate}</span>
                  </div>

                  <div className="totals__content-right-flex">
                    <h3 className="totals__content-right-heading">
                      Total:</h3>
                    <span className="totals__content-right-price">${totalPriceForAllItems}</span>
                  </div>
                </div>
              </div>

              <div className="checkout__payment">
                <div className="checkout__radio-wrapper">
                  <input type="radio" className="checkout__radio-input" id="direct-bank-transfer"
                         value={TransferOptionEnum.directBankTransfer} {...register("transferOption", { required: "Please select a payment option." })} />
                  <label htmlFor="direct-bank-transfer" className="checkout__radio-label">
                    <span className="checkout__radio-button"></span> Direct Bank Transfer</label>
                </div>

                <p className="checkout__text">Make your payment directly into our bank account. Please use your Order
                  ID as the payment reference. Your order will not be shipped until the funds have cleared in our
                  account.</p>

                <div className="checkout__radio-wrapper">
                  <input type="radio" className="checkout__radio-input" id="check-payment"
                         value={TransferOptionEnum.checkPayment} {...register("transferOption", { required: "Please select a payment option." })} />
                  <label htmlFor="check-payment" className="checkout__radio-label">
                    <span className="checkout__radio-button"></span>
                    Check Payment</label>
                </div>

                <div className="checkout__radio-wrapper">
                  <input type="radio" className="checkout__radio-input" id="cash-on-delivery"
                         value={TransferOptionEnum.cashOnDelivery} {...register("transferOption", { required: "Please select a payment option." })} />
                  <label htmlFor="cash-on-delivery" className="checkout__radio-label">
                    <span className="checkout__radio-button"></span>Cash on Delivery</label>
                </div>
                {errors.transferOption && <p role="alert">{errors.transferOption.message}</p>}
              </div>

              <div className="checkout__payment-actions">
                <button className="btn btn--grey checkout__place-order-btn" type="submit">Place order</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}