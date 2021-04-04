import React, { ReactElement, useContext } from "react";
import { AxiosInstance } from "axios";
import { Button } from "react-bootstrap";
import { AppContext } from "../context";
import { LOGOUT } from "../constants";

type Props = {
  keycloak: {
    url: string | undefined;
    realm: string | undefined;
    clientID: string | undefined;
    clientSecret: string | undefined;
    info: string | undefined;
  };
  httpClient: AxiosInstance;
  handleCheckout: () => void;
};

const LoggedIn = ({ keycloak, httpClient, handleCheckout }: Props): ReactElement => {
  const { state, dispatch } = useContext(AppContext);

  const logout = async () => {
    try {
      await httpClient.post(`${keycloak.realm}/logout`, `client_id=react&refresh_token=${state.user.refreshToken}`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      dispatch({ type: LOGOUT, payload: null });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="text-center">
      <h5 className="w-100">
        Welcome Back
        <br />
        {state.user.name}
      </h5>
      <Button variant="primary" className="btn-sm" onClick={() => logout()}>
        Logout
      </Button>
      <Button variant="secondary" type="submit" className="btn-block mt-3" onClick={() => handleCheckout()}>
        Checkout
      </Button>
    </div>
  );
};

export default LoggedIn;
