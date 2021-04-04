// ROUTES
export const ENTRY_ROUTE = "/";
export const STORE = ENTRY_ROUTE + "store";
export const CATEGORY = STORE + "/:cat+";
export const SEARCH = STORE + "/search";
export const CART = STORE + "/cart";

// STATE
export const ADD_PRODUCT = "add_product";
export const UPDATE_PRODUCT = "update_product";
export const REMOVE_PRODUCT = "remove_product";
export const CHECKOUT = "checkout";
export const LOGIN = "login";
export const LOGOUT = "logout";

// TOAST
export const PRODUCT_ADDED = "Product Added";
export const PRODUCT_UPDATED = "Product Updated";
export const PRODUCT_REMOVED = "Product Removed";
