export interface IProduct {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  imageAltText: string;
}

export interface ICartItem extends IProduct {
  itemCount: number;
  description: string;
  amountOfMoneyForItems: number;
}

export interface IWishlistItem extends IProduct {
  inStock: boolean;
}

export interface IWishlistOrCartItem extends IProduct {
  inStock?: boolean;
  itemCount?: number;
  description?: string;
  amountOfMoneyForItems?: number;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | undefined;
}
