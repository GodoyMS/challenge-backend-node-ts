export interface IAccount {
  _id?: string;
  name: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface IAccountInputMutation {
  name: string;
  email: string;
}

export interface IAccountInputQuery {
  page: number;
  pageSize: number;
  search?: string;
}
