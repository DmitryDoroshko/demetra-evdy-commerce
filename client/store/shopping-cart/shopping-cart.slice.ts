import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/model/types";

export interface IShoppingCartState {
  cartItems: ICartItem[];
  cartItemsLoading: boolean;
  cartItemsError: string | null;
  shippingFlatRate: number;
  totalItemsCount: number;
  totalPriceForAllItems: number;
  subtotalPriceForAllItems: number;
}

const initialState: IShoppingCartState = {
  cartItems: [],
  cartItemsLoading: false,
  cartItemsError: null,
  shippingFlatRate: 15,
  totalItemsCount: 0,
  totalPriceForAllItems: 0,
  subtotalPriceForAllItems: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addItemToCart(state, { payload }: PayloadAction<{ item: ICartItem, count: number }>) {
      const { item, count } = payload;

      if (count <= 0) {
        console.log("addItemToCart => count is invalid");
        return;
      }

      if (!item) {
        console.log("addItemToCart => item is null");
        return;
      }

      const stateCartItems = JSON.parse(JSON.stringify(state.cartItems));
      console.log({ stateCartItems });

      // if item already exists in cart
      const itemAlreadyExistingInShoppingCart: undefined | ICartItem = state.cartItems.find(itemInCart => itemInCart.id === item.id);
      if (itemAlreadyExistingInShoppingCart) {
        const newTotalItemsCount = state.totalItemsCount + count;

        const newTotalPriceForAllItemsWithShippingFlatRate = state.cartItems.reduce((accumulator, currentValue) => {
          if (currentValue.id === item.id) {
            return accumulator + ((currentValue.itemCount + count) * currentValue.price);
          }
          return accumulator + (currentValue.itemCount * currentValue.price);
        }, 0) + state.shippingFlatRate;

        state.totalItemsCount = newTotalItemsCount;
        state.totalPriceForAllItems = newTotalPriceForAllItemsWithShippingFlatRate;
        state.subtotalPriceForAllItems = newTotalPriceForAllItemsWithShippingFlatRate - state.shippingFlatRate;

        const newItemCount = itemAlreadyExistingInShoppingCart.itemCount + count;

        const updatedItemAlreadyExistingInShoppingCart = {
          ...item,
          itemCount: newItemCount,
          amountOfMoneyForItems: newItemCount * itemAlreadyExistingInShoppingCart.price,
        };

        state.cartItems = state.cartItems.map(cartItem => {
          if (cartItem.id === item.id) {
            return updatedItemAlreadyExistingInShoppingCart;
          }
          return cartItem;
        });
        return;
      }

      // From now on it's known that item doesn't exist in cart yet
      const newTotalItemsCount = state.totalItemsCount + count;
      state.totalItemsCount = newTotalItemsCount;

      state.cartItems = [...state.cartItems, { ...item, itemCount: count, amountOfMoneyForItems: count * item.price }];

      const newTotalPriceForAllItemsWithShippingFlatRate = state.cartItems.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.itemCount * currentValue.price);
      }, 0) + state.shippingFlatRate;
      state.totalPriceForAllItems = newTotalPriceForAllItemsWithShippingFlatRate;
      state.subtotalPriceForAllItems = newTotalPriceForAllItemsWithShippingFlatRate - state.shippingFlatRate;
    },
    removeItemFromCartByItsIdCompletely(state, { payload }: PayloadAction<string>) {
      const { id } = payload;
      // TODO: Make removeItemFromCartByItsIdCompletely work
    },
    removeItemByOneUnitByItsId(state, { payload }: PayloadAction<string>) {
      const { id } = payload;
      // TODO: Make removeItemByOneUnitByItsId work
    },
    clearCartCompletely(state) {
      state = initialState;
    },
  },
});

export const { addItemToCart, removeItemFromCartByItsIdCompletely, clearCartCompletely } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
