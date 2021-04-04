import React, { ReactElement } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { STORE } from "../constants";
import { ICategory } from "../interfaces";

const MenuNav = ({ categories }: { categories: ICategory[] }): ReactElement => {
  return (
    <Nav className="mr-auto">
      <Nav.Link as={Link} to={STORE}>
        Home
      </Nav.Link>
      {categories.length > 0 &&
        categories.map((cat) => {
          if (!cat?.subcategories?.length) {
            return (
              <Nav.Link key={cat.id} as={Link} to={`${STORE}/${slugify(cat.id + "-" + cat.name).toLowerCase()}`}>
                {cat.name}
              </Nav.Link>
            );
          } else {
            return (
              <NavDropdown key={cat.id} title={cat.name} id="basic-nav-dropdown">
                {cat.subcategories.length > 0 &&
                  cat.subcategories.map((subcat) => (
                    <NavDropdown.Item
                      key={subcat.id}
                      as={Link}
                      to={`${STORE}/${slugify(cat.id + "-" + cat.name).toLowerCase()}/${slugify(
                        subcat.id + "-" + subcat.name,
                      ).toLowerCase()}`}
                    >
                      {subcat.name}
                    </NavDropdown.Item>
                  ))}
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={`${STORE}/${slugify(cat.id + "-" + cat.name).toLowerCase()}`}>
                  All {cat.name}
                </NavDropdown.Item>
              </NavDropdown>
            );
          }
        })}
    </Nav>
  );
};

export default MenuNav;
