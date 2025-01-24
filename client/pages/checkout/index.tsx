import { useState } from "react";
import { MainSecondary } from "@/components/shared/MainSecondary/MainSecondary";
import { CheckoutActions } from "@/components/checkout/CheckoutActions/CheckoutActions";
import { CheckoutResult } from "@/components/checkout/CheckoutResult/CheckoutResult";

export default function CheckoutPage() {
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  const handleCheckoutSuccess = () => {
    setCheckoutSuccess(true);
  };

  return (
    <>
      <MainSecondary image={"/assets/img/main-secondary/checkout.png"} imageAlternativeText={"Checkout picture"}
                     subtitle={"Home / Checkout"} title={"Checkout"} />
      {!checkoutSuccess ? <CheckoutActions onSuccess={handleCheckoutSuccess}/> : <CheckoutResult />}
    </>
  );
}