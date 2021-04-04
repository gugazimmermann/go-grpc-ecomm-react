export type ICategory = {
  id: number;
  name: string;
  subcategories?: ICategory[];
};

export type ISampleCategory = {
  id: number;
  name: string;
  parent: number;
  subcategories?: ISampleCategory[];
};

export type IProduct = {
  id: number;
  name: string;
  quantity: number;
  value: number;
  category: number;
};

export type IProductsResult = {
  total: number;
  data: IProduct[];
};

export type IProductCard = {
  product: IProduct;
  quantity: number;
};

export type IToast = {
  product: IProduct;
  type: string;
};

export type IUser = {
  email: string;
  name: string;
  token: string;
  refreshToken: string;
};
