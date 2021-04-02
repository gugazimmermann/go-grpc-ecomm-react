import { sampleCategoryData, sampleProductData } from "../utils/sample-data";
import { ISampleCategory, IProduct, ICategory, IProductsResult } from "../interfaces";

const categoriesMenu = async (): Promise<ICategory[]> => {
  const parents = <ICategory[]>sampleCategoryData
    .map((c) => {
      if (!c.parent) return { id: c.id, name: c.name };
    })
    .filter((c) => c);
  const result = parents.map((p) => {
    p.subcategories = <ICategory[]>sampleCategoryData
      .map((s) => {
        if (s.parent === p.id) {
          return { id: s.id, name: s.name };
        }
      })
      .filter((s) => s);
    return { id: p.id, name: p.name, subcategories: p.subcategories };
  });
  result.sort((a, b) => a.name.localeCompare(b.name));
  return await new Promise<ICategory[]>((res) => res(result));
};

const categories = async (id: number): Promise<ICategory[]> => {
  const categories = sampleCategoryData.filter((c) => c.id === id);
  let result = [] as ICategory[];
  if (categories.length) {
    let parentID = categories[0].parent;
    if (parentID) {
      do {
        const p1 = sampleCategoryData.filter((p) => p.id === parentID)[0];
        if (!p1) {
          parentID = 0;
        } else {
          categories.push(p1);
          parentID = p1.parent;
        }
      } while (parentID);
    }
    result = <ICategory[]>categories.reverse().map((c) => ({ id: c.id, name: c.name }));
  }
  return await new Promise<ICategory[]>((res) => res(result));
};

const categoriesSideMenu = async (id: number): Promise<ICategory[]> => {
  const categories = sampleCategoryData.filter((c) => c.parent === id);
  const result = <ICategory[]>categories.map((c) => ({ id: c.id, name: c.name }));
  return await new Promise<ICategory[]>((res) => res(result));
};

const products = async (start = 0, qty = 8): Promise<IProductsResult> => {
  const products = sampleProductData.map((a) => ({ ...a }));
  products.sort((a, b) => a.name.localeCompare(b.name));
  const s = (start - 1) * qty;
  const e = s + qty;
  const result = {
    total: products.length,
    data: products.slice(s, e),
  };
  return await new Promise<IProductsResult>((res) => setTimeout(() => res(result), 50));
};

const nestedCategories = (): ISampleCategory[] => {
  const categories = sampleCategoryData.map((a) => ({ ...a }));
  categories.sort((a, b) => b.parent - a.parent);
  categories.forEach((m) => (m.subcategories = categories.filter((c) => c.parent === m.id)));
  return categories;
};

const productsFromCategory = async (id: number, start = 0, qty = 8): Promise<IProductsResult> => {
  const nested = nestedCategories();
  const category = nested.filter((c) => c.id === id)[0];
  const categoryIDs = [] as number[];
  const seeSub = (c: ISampleCategory) => {
    categoryIDs.push(c.id);
    if (c.subcategories?.length) c.subcategories.forEach((s) => seeSub(s));
  };
  seeSub(category);
  const products = [] as IProduct[];
  categoryIDs.forEach((id) => {
    sampleProductData.filter((p) => p.category === id).map((p) => products.push(p));
  });
  products.sort((a, b) => a.name.localeCompare(b.name));
  const s = (start - 1) * qty;
  const e = s + qty;
  const result = {
    total: products.length,
    data: products.slice(s, e),
  };
  return await new Promise<IProductsResult>((res) => setTimeout(() => res(result), 50));
};

const searchProducts = async (title: string, start = 0, qty = 8): Promise<IProductsResult> => {
  const products = sampleProductData
    .filter((p) => p.name.toLocaleLowerCase().includes(title))
    .sort((a, b) => a.name.localeCompare(b.name));
  const s = (start - 1) * qty;
  const e = s + qty;
  const result = {
    total: products.length,
    data: products.slice(s, e),
  };
  return await new Promise<IProductsResult>((res) => setTimeout(() => res(result), 50));
};

export { categoriesMenu, categories, categoriesSideMenu, products, productsFromCategory, searchProducts };
