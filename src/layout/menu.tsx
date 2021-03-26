import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { sampleCategoryData } from "../utils/sample-data";
import { Category } from "../interfaces";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../imgs/shield.svg";
import "./layout.scss";

interface MenuItemsProps {
  items: Category[];
  level: number;
}

const Menu = (): ReactElement => {
  const getCategories = (): Category[] => sampleCategoryData;

  const formatCategories = (): Category[] => {
    const cats: Category[] = getCategories();
    const mCats: Category[] = [];
    cats.sort((a, b) => b.parent - a.parent);
    cats.forEach((cat) => {
      mCats.push(cat);
    });
    mCats.forEach((m) => {
      m.subcategories = mCats.filter((c) => c.parent === m.id);
    });
    const menuCategories = mCats.filter((m) => m.parent === 0);
    menuCategories.sort((a, b) => a.name.localeCompare(b.name));

    return menuCategories;
  };

  const createNav = () => {
    const categories = formatCategories();

    return (
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        {categories.length ? (
          categories.map((cat) => {
            if (cat.subcategories && !cat.subcategories.length) {
              return (
                <Nav.Link key={cat.id} href="#link">
                  {cat.name}
                </Nav.Link>
              );
            } else {
              return (
                <NavDropdown key={cat.id} title={cat.name} id="basic-nav-dropdown">
                  {cat.subcategories ? (
                    cat.subcategories.map((subcat) => (
                      <NavDropdown.Item key={subcat.id} href="#action/3.1">
                        {subcat.name}
                      </NavDropdown.Item>
                    ))
                  ) : (
                    <></>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">All Books</NavDropdown.Item>
                </NavDropdown>
              );
            }
          })
        ) : (
          <></>
        )}
      </Nav>
    );
  };

  // const MenuItems = ({ items, level }: MenuItemsProps) => {
  //   return (
  //     <ul className={!level ? styles["navMenu"] : ""}>
  //       {items.map((item) => {
  //         return (
  //           <li key={item.id}>
  //             <Link to={`/${item.id}`}>{item.name}</Link>
  //             {item.subcategories && item.subcategories.length ? (
  //               <MenuItems items={item.subcategories} level={level + 1} />
  //             ) : null}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // };

  return (
    // <nav className={styles.navMain}>
    //   <MenuItems items={formatCategories()} level={0} />
    // </nav>
    <Navbar bg="primary" className="navbar-dark" expand="lg">
      <Navbar.Brand href="#home">
        <Logo width="30" height="30" className="logo d-inline-block align-top" /> React Bootstrap
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {createNav()}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="secondary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
