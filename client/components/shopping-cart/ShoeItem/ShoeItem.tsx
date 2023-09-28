import { useAppDispatch } from "@/hooks/redux-hooks";
import {
  decreaseItemByOneUnitByItsId, increaseItemByOneUnitByItsId,
  removeItemFromCartByItsIdCompletely,
} from "@/store/shopping-cart/shopping-cart.slice";

export function ShoeItem({
                           id,
                           amountOfMoneyForItems,
                           itemCount,
                           pictureSrc,
                           name,
                         }: { id: string; amountOfMoneyForItems: number; itemCount: number; pictureSrc: string; name: string; }) {
  const dispatch = useAppDispatch();

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCartByItsIdCompletely({ id }));
  };

  const decreaseItemByOneUnitHandler = () => {
    dispatch(decreaseItemByOneUnitByItsId({ id }));
  };

  const increaseItemByOneUnitHandler = () => {
    dispatch(increaseItemByOneUnitByItsId({ id }));
  };

  return (
    <div className="shopping-cart-full__shoe-item">
      <div className="shopping-cart-full__shoe-item-left">
        <svg onClick={removeItemFromCartHandler} className="shopping-cart-full__remove-icon" width="18" height="18"
             viewBox="0 0 18 18"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_20_1896)">
            <path d="M11.25 11.25L6.75 6.75M11.25 6.75L6.75 11.25" stroke="black" strokeWidth="1.5"
                  strokeLinecap="round" />
            <path
              d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
              stroke="black" strokeWidth="1.5" />
          </g>
          <defs>
            <clipPath id="clip0_20_1896">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="shopping-cart-full__picture">
          <img src={pictureSrc} alt="1" className="shopping-cart-full__img" />
        </div>
        <span className="shopping-cart-full__shoe-name">{name}</span>
      </div>

      <div className="shopping-cart-full__shoe-item-actions-middle">
        <button className="shopping-cart-full__remove" onClick={decreaseItemByOneUnitHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M6 1L1 6L6 11" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="shopping-cart-full__count">{itemCount}</span>
        <button className="shopping-cart-full__add" onClick={increaseItemByOneUnitHandler}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11L6 6L1 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="shopping-cart-full__shoe-item-right">
        <span className="shopping-cart-full__shoe-item-price">${amountOfMoneyForItems}</span>
      </div>
    </div>
  );
}
