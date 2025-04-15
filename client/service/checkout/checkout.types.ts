import { ICartItem } from "@/model/types";

enum TransferOptionEnum {
  directBankTransfer = "directBankTransfer",
  checkPayment = "checkPayment",
  cashOnDelivery = "cashOnDelivery",
}

interface IUserInfo {
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

export interface ICreateOrder {
  userId: string;
  items: ICartItem[];
  userInfo: IUserInfo;
}