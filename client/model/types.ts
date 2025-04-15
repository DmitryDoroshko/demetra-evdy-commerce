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

enum TransferOptionEnum {
  directBankTransfer = "directBankTransfer",
  checkPayment = "checkPayment",
  cashOnDelivery = "cashOnDelivery",
}

export interface IUserOrderDetails extends IUser {
  name: string;
  surname: string;
  country: string;
  city: string;
  address: string;
  email: string;
  zipcode: string;
  transferOption: TransferOptionEnum;
  companyName?: string;
  phoneNumber?: string;
}