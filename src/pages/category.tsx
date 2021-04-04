import React, { lazy, ReactElement, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Location } from "history";
import { Col, Container, Row } from "react-bootstrap";
import * as API from "../api";
import { ICategory, IProduct } from "../interfaces";
import { STORE, SEARCH } from "../constants";

const Breadcrumb = lazy(() => import("../components/breadcrumb"));
const SideMenu = lazy(() => import("../components/side-menu"));
const QtyPerPage = lazy(() => import("../components/qty-per-page"));
const ProductCard = lazy(() => import("../components/product-card"));
const Pagination = lazy(() => import("../components/pagination"));

const Category = (): ReactElement => {
  const history = useHistory();
  const location = useLocation<Location>();
  const searchParams = new URLSearchParams(useLocation().search);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [categoriesSideMenu, setCategoriesSideMenu] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsTotal, setProductsTotal] = useState(0);
  const [pageCurr, setPageCurr] = useState(1);
  const [pageQty, setPageQty] = useState(8);

  useEffect(() => {
    reset();

    const title = searchParams.get("title");
    if (title) handleSearch(title);
    if (location.pathname === STORE) {
      handleHome();
    } else {
      const catID = getCatID(location.pathname);
      if (catID) getCategories(catID);
    }

    const getPage = searchParams.get("page");
    const getQty = searchParams.get("qty");
    if (getQty && getPage) getPageQty(+getPage, +getQty);
  }, [location]);

  const reset = () => {
    setCategories([]);
    setCategoriesSideMenu([]);
    setProducts([]);
    setProductsTotal(0);
    setSearch("");
    setPageCurr(1);
  };

  const handleSearch = async (title: string) => {
    const products = await API.searchProducts(title, pageCurr, pageQty);
    setProductsTotal(products.total);
    setProducts(products.data);
    setSearch(title);
  };

  const handleHome = async () => {
    const products = await API.products(pageCurr, pageQty);
    setProductsTotal(products.total);
    setProducts(products.data);
  };

  const getCatID = (pathname: string): number | null => {
    const cat = pathname.split("/").filter((l) => l);
    const catID = cat[cat.length - 1].split("-")[0];
    return +catID;
  };

  const getCategories = async (catID: number) => {
    const cats = await API.getCategories(catID);
    if (cats.length) {
      const catsSideMenu = await API.getCategoriesSideMenu(catID);
      setCategories(cats);
      setCategoriesSideMenu(catsSideMenu);
      getProducts(cats);
    }
  };

  const getProducts = async (cats: ICategory[]) => {
    const id = cats[cats.length - 1].id;
    const products = await API.productsFromCategory(id, pageCurr, pageQty);
    setProductsTotal(products.total);
    setProducts(products.data);
  };

  const getPageQty = (getPage: number, getQty: number) => {
    const page = getPage <= 0 ? 1 : getPage;
    setPageCurr(page);
    let qty = getQty;
    if (getQty <= 8) qty = 8;
    if (getQty > 8 && getQty <= 16) qty = 16;
    if (getQty > 16) qty = 32;
    setPageQty(qty);
  };

  const changeQuantity = (qty: number) => {
    setPageQty(qty);
    setPageCurr(1);
    changePage(1, qty);
  };

  const changePage = async (page: number, qty = pageQty) => {
    setPageCurr(page);
    if (!search) {
      history.push(`${location.pathname}?page=${page}&qty=${qty}`);
    } else {
      history.push(`${SEARCH}?title=${search}&page=${page}&qty=${qty}`);
    }
  };

  return (
    <section className="pb-2">
      <Container>
        {(productsTotal > 0 || search !== "") && (
          <Breadcrumb categories={categories} productsTotal={productsTotal} search={search} />
        )}
        <Row>
          <Col xs={3}>
            {categoriesSideMenu.length > 0 && (
              <SideMenu categories={categories} categoriesSideMenu={categoriesSideMenu} />
            )}
            {productsTotal > 0 && <QtyPerPage pageQty={pageQty} changeQuantity={changeQuantity} />}
          </Col>
          <Col xs={9}>
            <Row>
              <Col className="products d-flex flex-row flex-wrap position-relative" xs={12}>
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </Col>
              <Col xs={12} className="pagination mt-3 mb-0">
                {productsTotal > pageQty && (
                  <Pagination
                    productsTotal={productsTotal}
                    pageQty={pageQty}
                    pageCurr={pageCurr}
                    changePage={changePage}
                  />
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Category;
