import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class Category extends jspb.Message {
  getId(): string;
  setId(value: string): Category;

  getName(): string;
  setName(value: string): Category;

  getSlug(): string;
  setSlug(value: string): Category;

  getAncestorsList(): Array<Category>;
  setAncestorsList(value: Array<Category>): Category;
  clearAncestorsList(): Category;
  addAncestors(value?: Category, index?: number): Category;

  getChildrensList(): Array<Category>;
  setChildrensList(value: Array<Category>): Category;
  clearChildrensList(): Category;
  addChildrens(value?: Category, index?: number): Category;

  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Category;
  hasLastUpdated(): boolean;
  clearLastUpdated(): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: string,
    name: string,
    slug: string,
    ancestorsList: Array<Category.AsObject>,
    childrensList: Array<Category.AsObject>,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Product extends jspb.Message {
  getId(): string;
  setId(value: string): Product;

  getName(): string;
  setName(value: string): Product;

  getSlug(): string;
  setSlug(value: string): Product;

  getImage(): string;
  setImage(value: string): Product;

  getQuantity(): number;
  setQuantity(value: number): Product;

  getValue(): number;
  setValue(value: number): Product;

  getCategory(): Category | undefined;
  setCategory(value?: Category): Product;
  hasCategory(): boolean;
  clearCategory(): Product;

  getLastUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Product;
  hasLastUpdated(): boolean;
  clearLastUpdated(): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: string,
    name: string,
    slug: string,
    image: string,
    quantity: number,
    value: number,
    category?: Category.AsObject,
    lastUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CategoryRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): CategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryRequest): CategoryRequest.AsObject;
  static serializeBinaryToWriter(message: CategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryRequest;
  static deserializeBinaryFromReader(message: CategoryRequest, reader: jspb.BinaryReader): CategoryRequest;
}

export namespace CategoryRequest {
  export type AsObject = {
    slug: string,
  }
}

export class CategoriesMenuResponse extends jspb.Message {
  getCategoriesList(): Array<Category>;
  setCategoriesList(value: Array<Category>): CategoriesMenuResponse;
  clearCategoriesList(): CategoriesMenuResponse;
  addCategories(value?: Category, index?: number): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoriesMenuResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CategoriesMenuResponse): CategoriesMenuResponse.AsObject;
  static serializeBinaryToWriter(message: CategoriesMenuResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoriesMenuResponse;
  static deserializeBinaryFromReader(message: CategoriesMenuResponse, reader: jspb.BinaryReader): CategoriesMenuResponse;
}

export namespace CategoriesMenuResponse {
  export type AsObject = {
    categoriesList: Array<Category.AsObject>,
  }
}

export class ProductRequest extends jspb.Message {
  getStart(): number;
  setStart(value: number): ProductRequest;

  getQty(): number;
  setQty(value: number): ProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductRequest): ProductRequest.AsObject;
  static serializeBinaryToWriter(message: ProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductRequest;
  static deserializeBinaryFromReader(message: ProductRequest, reader: jspb.BinaryReader): ProductRequest;
}

export namespace ProductRequest {
  export type AsObject = {
    start: number,
    qty: number,
  }
}

export class ProductFromCategoryRequest extends jspb.Message {
  getCategoryid(): string;
  setCategoryid(value: string): ProductFromCategoryRequest;

  getStart(): number;
  setStart(value: number): ProductFromCategoryRequest;

  getQty(): number;
  setQty(value: number): ProductFromCategoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductFromCategoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProductFromCategoryRequest): ProductFromCategoryRequest.AsObject;
  static serializeBinaryToWriter(message: ProductFromCategoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductFromCategoryRequest;
  static deserializeBinaryFromReader(message: ProductFromCategoryRequest, reader: jspb.BinaryReader): ProductFromCategoryRequest;
}

export namespace ProductFromCategoryRequest {
  export type AsObject = {
    categoryid: string,
    start: number,
    qty: number,
  }
}

export class SearchProductsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SearchProductsRequest;

  getStart(): number;
  setStart(value: number): SearchProductsRequest;

  getQty(): number;
  setQty(value: number): SearchProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchProductsRequest): SearchProductsRequest.AsObject;
  static serializeBinaryToWriter(message: SearchProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchProductsRequest;
  static deserializeBinaryFromReader(message: SearchProductsRequest, reader: jspb.BinaryReader): SearchProductsRequest;
}

export namespace SearchProductsRequest {
  export type AsObject = {
    name: string,
    start: number,
    qty: number,
  }
}

export class ProductsResponse extends jspb.Message {
  getTotal(): number;
  setTotal(value: number): ProductsResponse;

  getDataList(): Array<Product>;
  setDataList(value: Array<Product>): ProductsResponse;
  clearDataList(): ProductsResponse;
  addData(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProductsResponse): ProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductsResponse;
  static deserializeBinaryFromReader(message: ProductsResponse, reader: jspb.BinaryReader): ProductsResponse;
}

export namespace ProductsResponse {
  export type AsObject = {
    total: number,
    dataList: Array<Product.AsObject>,
  }
}

export class CheckoutRequest extends jspb.Message {
  getCartList(): Array<CheckoutRequest.Cart>;
  setCartList(value: Array<CheckoutRequest.Cart>): CheckoutRequest;
  clearCartList(): CheckoutRequest;
  addCart(value?: CheckoutRequest.Cart, index?: number): CheckoutRequest.Cart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutRequest): CheckoutRequest.AsObject;
  static serializeBinaryToWriter(message: CheckoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutRequest;
  static deserializeBinaryFromReader(message: CheckoutRequest, reader: jspb.BinaryReader): CheckoutRequest;
}

export namespace CheckoutRequest {
  export type AsObject = {
    cartList: Array<CheckoutRequest.Cart.AsObject>,
  }

  export class Cart extends jspb.Message {
    getProduct(): Product | undefined;
    setProduct(value?: Product): Cart;
    hasProduct(): boolean;
    clearProduct(): Cart;

    getQty(): number;
    setQty(value: number): Cart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cart.AsObject;
    static toObject(includeInstance: boolean, msg: Cart): Cart.AsObject;
    static serializeBinaryToWriter(message: Cart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cart;
    static deserializeBinaryFromReader(message: Cart, reader: jspb.BinaryReader): Cart;
  }

  export namespace Cart {
    export type AsObject = {
      product?: Product.AsObject,
      qty: number,
    }
  }

}

export class CheckoutResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckoutResponse): CheckoutResponse.AsObject;
  static serializeBinaryToWriter(message: CheckoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckoutResponse;
  static deserializeBinaryFromReader(message: CheckoutResponse, reader: jspb.BinaryReader): CheckoutResponse;
}

export namespace CheckoutResponse {
  export type AsObject = {
  }
}

