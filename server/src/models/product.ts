export interface IProduct {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  imageAltText: string;
}

export interface ICartItem extends IProduct {
  itemCount?: number;
  description: string;
}
