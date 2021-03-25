export type Category = {
  id: number;
  name: string;
  parent: number;
};

export type Product = {
  id: number;
  name: string;
  quantity: number;
  value: number;
  category: number;
};
