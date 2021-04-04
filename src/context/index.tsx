import React, { createContext, useReducer, Dispatch, ReactNode, ReactElement } from "react";
import { IProductCard, IToast, IUser } from "../interfaces";
import { CartReducer, CartActions, IStateType } from "./reducers";

const initialState = {
  cart: [] as IProductCard[],
  toast: {} as IToast,
  user: {} as IUser,
};

type IAppContext = {
  state: IStateType;
  dispatch: Dispatch<CartActions>;
};

const AppContext = createContext<IAppContext>({ state: initialState, dispatch: () => null });

const mainReducer = (state: IStateType, action: CartActions) => CartReducer(state, action);

const AppProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
