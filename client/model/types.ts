export interface IProduct {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  imageAltText: string;
  availabilityStatus: "out-of-stock" | "in-stock";
}

export interface ICartItem extends IProduct {
  itemCount: number;
  description: string;
  amountOfMoneyForItems: number;
}

export interface IWishlistItem extends IProduct {
}
