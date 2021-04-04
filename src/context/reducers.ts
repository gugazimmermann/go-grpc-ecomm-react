import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  PRODUCT_ADDED,
  PRODUCT_UPDATED,
  PRODUCT_REMOVED,
  LOGIN,
  LOGOUT,
  CHECKOUT,
} from "../constants";
import { IProduct, IProductCard, IToast, IUser } from "../interfaces";

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type IStateType = {
  cart: IProductCard[];
  toast: IToast;
  user: IUser;
};

type IUpdateProduct = {
  id: number;
  type: "add" | "remove";
};

type CartPayload = {
  [ADD_PRODUCT]: IProduct;
  [UPDATE_PRODUCT]: IUpdateProduct;
  [REMOVE_PRODUCT]: number;
  [CHECKOUT]: null;
  [LOGIN]: IUser;
  [LOGOUT]: null;
};

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>];

export const CartReducer = (state: IStateType, { type, payload }: CartActions): IStateType => {
  switch (type) {
    case ADD_PRODUCT:
      return addProduct(state, payload as IProduct);
    case UPDATE_PRODUCT:
      return updateProduct(state, payload as IUpdateProduct);
    case REMOVE_PRODUCT:
      return removeProduct(state, payload as number);
    case CHECKOUT:
      return checkoutCart(state);
    case LOGIN:
      return loginUser(state, payload as IUser);
    case LOGOUT:
      return logoutUser(state);
    default:
      throw new Error("TYPE NOT FOUND");
  }
};

const addProduct = (state: IStateType, product: IProduct): IStateType => {
  const cart = state.cart.map((a) => ({ ...a }));
  const hasProduct = state.cart.filter((p) => p.product.id === product.id)[0];
  if (hasProduct) return updateProduct(state, { id: product.id, type: "add" });
  cart.push({
    product,
    quantity: 1,
  });
  const toast = {
    product,
    type: PRODUCT_ADDED,
  };
  return { ...state, cart, toast };
};

const updateProduct = (state: IStateType, { id, type }: IUpdateProduct): IStateType => {
  const cart = state.cart.map((a) => ({ ...a }));
  let showToast = true;
  let toastType = "";
  cart.map((p) => {
    if (p.product.id === id) {
      if (type === "add") {
        toastType = PRODUCT_UPDATED;
        p.quantity = ++p.quantity;
        if (p.quantity > p.product.quantity) {
          showToast = false;
          p.quantity = p.product.quantity;
        }
      }
      if (type === "remove") {
        toastType = PRODUCT_REMOVED;
        p.quantity = --p.quantity;
        if (p.quantity < 0) {
          showToast = false;
          p.quantity = 0;
        }
      }
    }
  });

  if (showToast) {
    const toast = {
      product: cart.filter((p) => p.product.id === id)[0].product,
      type: toastType,
    };
    return { ...state, cart, toast };
  } else {
    return { ...state };
  }
};

const removeProduct = (state: IStateType, id: number): IStateType => {
  return {
    ...state,
    cart: state.cart.filter((p) => p.product.id !== id),
    toast: {
      product: state.cart.filter((p) => p.product.id === id)[0].product,
      type: PRODUCT_REMOVED,
    },
  };
};

const checkoutCart = (state: IStateType) => {
  const cart = [] as IProductCard[];
  return { ...state, cart };
};

const loginUser = (state: IStateType, user: IUser) => {
  return { ...state, user };
};

const logoutUser = (state: IStateType) => {
  const user = {} as IUser;
  return { ...state, user };
};
