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
    addItemToCart(
      state,
      { payload }: PayloadAction<{ item: ICartItem; count: number }>,
    ) {
      const { item, count } = payload;

      if (count <= 0) {
        return;
      }

      if (!item) {
        return;
      }

      // if item already exists in cart
      const itemAlreadyExistingInShoppingCart: undefined | ICartItem =
        state.cartItems.find((itemInCart) => itemInCart.id === item.id);
      if (itemAlreadyExistingInShoppingCart) {
        const newTotalItemsCount = state.totalItemsCount + count;

        const newTotalPriceForAllItemsWithShippingFlatRate =
          state.cartItems.reduce((accumulator, currentValue) => {
            if (currentValue.id === item.id) {
              return (
                accumulator +
                (currentValue.itemCount + count) * currentValue.price
              );
            }
            return accumulator + currentValue.itemCount * currentValue.price;
          }, 0) + state.shippingFlatRate;

        state.totalItemsCount = newTotalItemsCount;
        state.totalPriceForAllItems =
          newTotalPriceForAllItemsWithShippingFlatRate;
        state.subtotalPriceForAllItems =
          newTotalPriceForAllItemsWithShippingFlatRate - state.shippingFlatRate;

        const newItemCount =
          itemAlreadyExistingInShoppingCart.itemCount + count;

        const updatedItemAlreadyExistingInShoppingCart = {
          ...item,
          itemCount: newItemCount,
          amountOfMoneyForItems:
            newItemCount * itemAlreadyExistingInShoppingCart.price,
        };

        state.cartItems = state.cartItems.map((cartItem) => {
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

      state.cartItems = [
        ...state.cartItems,
        {
          ...item,
          itemCount: count,
          amountOfMoneyForItems: count * item.price,
        },
      ];

      const newTotalPriceForAllItemsWithShippingFlatRate =
        state.cartItems.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.itemCount * currentValue.price;
        }, 0) + state.shippingFlatRate;
      state.totalPriceForAllItems =
        newTotalPriceForAllItemsWithShippingFlatRate;
      state.subtotalPriceForAllItems =
        newTotalPriceForAllItemsWithShippingFlatRate - state.shippingFlatRate;
    },
    removeItemFromCartByItsIdCompletely(
      state,
      { payload }: PayloadAction<{ id: string }>,
    ) {
      const { id } = payload;
      const itemToDelete = state.cartItems.find((item) => item.id === id);

      if (!itemToDelete) {
        return;
      }

      state.totalPriceForAllItems =
        state.totalPriceForAllItems -
        itemToDelete.itemCount * itemToDelete.price;
      state.subtotalPriceForAllItems =
        state.totalPriceForAllItems - state.shippingFlatRate;
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemToDelete.id,
      );
    },
    decreaseItemByOneUnitByItsId(state, { payload }: PayloadAction<{ id: string; }>) {
      const { id } = payload;
      const itemToDecreaseByOneUnit = state.cartItems.find(
        (item) => item.id === id,
      );

      if (!itemToDecreaseByOneUnit) {
        return;
      }

      if (itemToDecreaseByOneUnit.itemCount === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== itemToDecreaseByOneUnit.id,
        );
        state.totalPriceForAllItems =
          state.totalPriceForAllItems - itemToDecreaseByOneUnit.price;
        state.subtotalPriceForAllItems =
          state.totalPriceForAllItems - state.shippingFlatRate;
        return;
      }

      state.cartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === itemToDecreaseByOneUnit.id) {
          return {
            ...cartItem,
            itemCount: cartItem.itemCount - 1,
            amountOfMoneyForItems:
              cartItem.amountOfMoneyForItems - cartItem.price,
          };
        }
        return cartItem;
      });
      state.totalPriceForAllItems =
        state.totalPriceForAllItems - itemToDecreaseByOneUnit.price;
      state.subtotalPriceForAllItems =
        state.totalPriceForAllItems - state.shippingFlatRate;
    },
    increaseItemByOneUnitByItsId(state, { payload }: PayloadAction<{ id: string; }>) {
      const { id } = payload;
      const itemToIncreaseByOneUnit = state.cartItems.find(
        (cartItem) => cartItem.id === id,
      );

      if (!itemToIncreaseByOneUnit) {
        return;
      }

      state.cartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === itemToIncreaseByOneUnit.id) {
          return {
            ...cartItem,
            itemCount: cartItem.itemCount + 1,
            amountOfMoneyForItems:
              cartItem.amountOfMoneyForItems + cartItem.price,
          };
        }
        return cartItem;
      });

      state.totalPriceForAllItems =
        state.totalPriceForAllItems + itemToIncreaseByOneUnit.price;
      state.subtotalPriceForAllItems =
        state.totalPriceForAllItems - state.shippingFlatRate;
    },
    clearCartCompletely(state) {
      state = initialState;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCartByItsIdCompletely,
  decreaseItemByOneUnitByItsId,
  increaseItemByOneUnitByItsId,
  clearCartCompletely,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
