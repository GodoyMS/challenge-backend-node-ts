import mongoose from "mongoose";
export interface IProduct {
  _id?: string;
  name: string;
  account: mongoose.Types.ObjectId;
  sku: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IProductInputMutation {
  name: string;
  sku: string;
}

export interface IProductInputQuery {
  page: number;
  pageSize: number;
  search?: string;
}
