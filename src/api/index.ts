import * as SERVER from "../utils/server";
import { ICategory, IProductsResult } from "../interfaces";

const getCategoriesMenu = async (): Promise<ICategory[]> => {
  return await SERVER.categoriesMenu();
};

const getCategories = async (id: number): Promise<ICategory[]> => {
  return await SERVER.categories(id);
};

const getCategoriesSideMenu = async (id: number): Promise<ICategory[]> => {
  return await SERVER.categoriesSideMenu(id);
};

const products = async (start: number, qty: number): Promise<IProductsResult> => {
  return await SERVER.products(start, qty);
};

const productsFromCategory = async (id: number, start: number, qty: number): Promise<IProductsResult> => {
  return await SERVER.productsFromCategory(id, start, qty);
};

const searchProducts = async (title: string, start: number, qty: number): Promise<IProductsResult> => {
  return SERVER.searchProducts(title, start, qty);
};

export { getCategoriesMenu, getCategories, getCategoriesSideMenu, products, productsFromCategory, searchProducts };
