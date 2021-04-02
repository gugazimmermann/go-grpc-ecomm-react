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
