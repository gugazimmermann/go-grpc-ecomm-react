/**
 * @fileoverview gRPC-Web generated client stub for ecomm
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as ecommpb_ecomm_pb from '../ecommpb/ecomm_pb';


export class EcommServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCategoriesMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    ecommpb_ecomm_pb.CategoriesMenuResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    ecommpb_ecomm_pb.CategoriesMenuResponse.deserializeBinary
  );

  categoriesMenu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<ecommpb_ecomm_pb.CategoriesMenuResponse>;

  categoriesMenu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.CategoriesMenuResponse) => void): grpcWeb.ClientReadableStream<ecommpb_ecomm_pb.CategoriesMenuResponse>;

  categoriesMenu(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.CategoriesMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/CategoriesMenu',
        request,
        metadata || {},
        this.methodInfoCategoriesMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/CategoriesMenu',
    request,
    metadata || {},
    this.methodInfoCategoriesMenu);
  }

  methodInfoCategoryBreadcrumb = new grpcWeb.AbstractClientBase.MethodInfo(
    ecommpb_ecomm_pb.CategoriesMenuResponse,
    (request: ecommpb_ecomm_pb.CategoryRequest) => {
      return request.serializeBinary();
    },
    ecommpb_ecomm_pb.CategoriesMenuResponse.deserializeBinary
  );

  categoryBreadcrumb(
    request: ecommpb_ecomm_pb.CategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<ecommpb_ecomm_pb.CategoriesMenuResponse>;

  categoryBreadcrumb(
    request: ecommpb_ecomm_pb.CategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.CategoriesMenuResponse) => void): grpcWeb.ClientReadableStream<ecommpb_ecomm_pb.CategoriesMenuResponse>;

  categoryBreadcrumb(
    request: ecommpb_ecomm_pb.CategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.CategoriesMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/CategoryBreadcrumb',
        request,
        metadata || {},
        this.methodInfoCategoryBreadcrumb,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/CategoryBreadcrumb',
    request,
    metadata || {},
    this.methodInfoCategoryBreadcrumb);
  }

  methodInfoCategoriesSideMenu = new grpcWeb.AbstractClientBase.MethodInfo(
    ecommpb_ecomm_pb.CategoriesMenuResponse,
    (request: ecommpb_ecomm_pb.CategoryRequest) => {
      return request.serializeBinary();
    },
    ecommpb_ecomm_pb.CategoriesMenuResponse.deserializeBinary
  );

  categoriesSideMenu(
    request: ecommpb_ecomm_pb.CategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<ecommpb_ecomm_pb.CategoriesMenuResponse>;

  categoriesSideMenu(
    request: ecommpb_ecomm_pb.CategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.CategoriesMenuResponse) => void): grpcWeb.ClientReadableStream<ecommpb_ecomm_pb.CategoriesMenuResponse>;

  categoriesSideMenu(
    request: ecommpb_ecomm_pb.CategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.CategoriesMenuResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/CategoriesSideMenu',
        request,
        metadata || {},
        this.methodInfoCategoriesSideMenu,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/CategoriesSideMenu',
    request,
    metadata || {},
    this.methodInfoCategoriesSideMenu);
  }

  methodInfoProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    ecommpb_ecomm_pb.ProductsResponse,
    (request: ecommpb_ecomm_pb.ProductRequest) => {
      return request.serializeBinary();
    },
    ecommpb_ecomm_pb.ProductsResponse.deserializeBinary
  );

  products(
    request: ecommpb_ecomm_pb.ProductRequest,
    metadata: grpcWeb.Metadata | null): Promise<ecommpb_ecomm_pb.ProductsResponse>;

  products(
    request: ecommpb_ecomm_pb.ProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.ProductsResponse) => void): grpcWeb.ClientReadableStream<ecommpb_ecomm_pb.ProductsResponse>;

  products(
    request: ecommpb_ecomm_pb.ProductRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.ProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/Products',
        request,
        metadata || {},
        this.methodInfoProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/Products',
    request,
    metadata || {},
    this.methodInfoProducts);
  }

  methodInfoProductsFromCategory = new grpcWeb.AbstractClientBase.MethodInfo(
    ecommpb_ecomm_pb.ProductsResponse,
    (request: ecommpb_ecomm_pb.ProductFromCategoryRequest) => {
      return request.serializeBinary();
    },
    ecommpb_ecomm_pb.ProductsResponse.deserializeBinary
  );

  productsFromCategory(
    request: ecommpb_ecomm_pb.ProductFromCategoryRequest,
    metadata: grpcWeb.Metadata | null): Promise<ecommpb_ecomm_pb.ProductsResponse>;

  productsFromCategory(
    request: ecommpb_ecomm_pb.ProductFromCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.ProductsResponse) => void): grpcWeb.ClientReadableStream<ecommpb_ecomm_pb.ProductsResponse>;

  productsFromCategory(
    request: ecommpb_ecomm_pb.ProductFromCategoryRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.ProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/ProductsFromCategory',
        request,
        metadata || {},
        this.methodInfoProductsFromCategory,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/ProductsFromCategory',
    request,
    metadata || {},
    this.methodInfoProductsFromCategory);
  }

  methodInfoSearchProducts = new grpcWeb.AbstractClientBase.MethodInfo(
    ecommpb_ecomm_pb.ProductsResponse,
    (request: ecommpb_ecomm_pb.SearchProductsRequest) => {
      return request.serializeBinary();
    },
    ecommpb_ecomm_pb.ProductsResponse.deserializeBinary
  );

  searchProducts(
    request: ecommpb_ecomm_pb.SearchProductsRequest,
    metadata: grpcWeb.Metadata | null): Promise<ecommpb_ecomm_pb.ProductsResponse>;

  searchProducts(
    request: ecommpb_ecomm_pb.SearchProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.ProductsResponse) => void): grpcWeb.ClientReadableStream<ecommpb_ecomm_pb.ProductsResponse>;

  searchProducts(
    request: ecommpb_ecomm_pb.SearchProductsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ecommpb_ecomm_pb.ProductsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/SearchProducts',
        request,
        metadata || {},
        this.methodInfoSearchProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/SearchProducts',
    request,
    metadata || {},
    this.methodInfoSearchProducts);
  }

  methodInfoCheckout = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_wrappers_pb.BoolValue,
    (request: ecommpb_ecomm_pb.CheckoutRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_wrappers_pb.BoolValue.deserializeBinary
  );

  checkout(
    request: ecommpb_ecomm_pb.CheckoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_wrappers_pb.BoolValue>;

  checkout(
    request: ecommpb_ecomm_pb.CheckoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.BoolValue) => void): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.BoolValue>;

  checkout(
    request: ecommpb_ecomm_pb.CheckoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.BoolValue) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/ecomm.EcommService/Checkout',
        request,
        metadata || {},
        this.methodInfoCheckout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/ecomm.EcommService/Checkout',
    request,
    metadata || {},
    this.methodInfoCheckout);
  }

}

