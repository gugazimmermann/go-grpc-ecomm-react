import React, { ReactElement } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { STORE } from "../constants";
import { ICategory } from "../interfaces";

type Props = {
  categories: ICategory[];
  categoriesSideMenu: ICategory[];
};

const SideMenu = ({ categories, categoriesSideMenu }: Props): ReactElement => {
  let url = "";
  categories.forEach((c) => (url += `${STORE}/${slugify(`${c.id}-${c.name}`).toLowerCase()}`));
  return (
    <Nav variant="pills" className="flex-column mb-3">
      {categoriesSideMenu.map((c) => {
        return (
          <Nav.Link key={c.id} as={Link} to={`${url}/${slugify(c.id + "-" + c.name).toLowerCase()}`}>
            {c.name}
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

export default SideMenu;
