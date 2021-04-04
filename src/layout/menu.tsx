import React, { lazy, ReactElement, SyntheticEvent, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormControl, Navbar } from "react-bootstrap";
import * as API from "../api";
import { ICategory } from "../interfaces";
import { ReactComponent as Logo } from "../imgs/shield.svg";
import { SEARCH, STORE } from "../constants";

const Cart = lazy(() => import("../components/menu-cart"));
const MenuNav = lazy(() => import("../components/menu-nav"));

const Menu = (): ReactElement => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    formatCategories();
  }, []);

  const formatCategories = async () => {
    const cats = await API.getCategoriesMenu();
    setCategories(cats);
  };

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    const query = search.trim();
    if (query && query.length >= 3) {
      setSearch("");
      history.push(`${SEARCH}?title=${query.toLocaleLowerCase()}`);
    }
  };

  return (
    <Navbar bg="primary" className="navbar-dark">
      <Navbar.Brand as={Link} to={STORE}>
        <Logo width="30" height="30" className="logo d-inline-block align-top" /> React Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <MenuNav categories={categories} />
        <Form inline onSubmit={(e) => handleSearch(e)}>
          <FormControl
            size="sm"
            type="text"
            placeholder="Search"
            className="ml-sm-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <Cart />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
