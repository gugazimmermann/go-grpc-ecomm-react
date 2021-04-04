import React, { FormEvent, ReactElement, useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { AxiosInstance } from "axios";
import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { LOGIN } from "../constants";

type Props = {
  keycloak: {
    url: string | undefined;
    realm: string | undefined;
    clientID: string | undefined;
    clientSecret: string | undefined;
    info: string | undefined;
  };
  httpClient: AxiosInstance;
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ keycloak, httpClient, setCheckout }: Props): ReactElement => {
  const { dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [down, setDown] = useState(true);

  useEffect(() => {
    seeKeycloakDown();
    setCheckout(false);
  }, []);

  const seeKeycloakDown = async () => {
    try {
      await httpClient.get(`${keycloak.info}`);
    } catch (err) {
      setDown(false);
      console.log(err);
    }
  };

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (!email || !password) {
      return false;
    }
    try {
      const loginRes = await httpClient.post(
        `${keycloak.realm}/token`,
        `grant_type=password&client_id=${keycloak.clientID}&client_secret=${keycloak.clientSecret}&username=${email}&password=${password}`,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
      );
      const profileRes = await httpClient.get(`${keycloak.realm}/userinfo`, {
        headers: {
          authorization: `Bearer ${loginRes.data.access_token}`,
        },
      });
      dispatch({
        type: LOGIN,
        payload: {
          email: profileRes.data.email,
          name: profileRes.data.name,
          token: loginRes.data.access_token,
          refreshToken: loginRes.data.refresh_token,
        },
      });
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <Form onSubmit={(e) => login(e)}>
      {!down && <Alert variant="danger">Keycloak is down!</Alert>}
      <h5 className="text-center w-100">You need to login to finish</h5>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>#</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputGroup>
      {error && <Alert variant="danger">Error to login!</Alert>}
      <Button variant="primary" type="submit" className="btn-block" disabled={!keycloak}>
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
