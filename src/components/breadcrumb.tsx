import React, { ReactElement, ReactNode } from "react";
import { Breadcrumb as BC } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import slugify from "slugify";
import { STORE } from "../constants";
import { ICategory } from "../interfaces";

type Props = {
  categories: ICategory[];
  productsTotal: number;
  search: string;
};

const Breadcrumb = ({ categories, productsTotal, search }: Props): ReactElement => {
  const history = useHistory();

  const showBreadcrumb = ({ categories, productsTotal, search }: Props): ReactNode => {
    if (categories.length) {
      let url = "";
      const bccats: { id: number; name: string; url: string }[] = [];
      categories.forEach((c) => {
        url += `${STORE}/${slugify(`${c.id}-${c.name}`).toLowerCase()}`;
        bccats.push({ id: c.id, name: c.name, url });
      });
      return bccats.map((cat) => {
        return (
          <BC.Item key={cat.id} onClick={() => history.push(cat.url)}>
            {cat.name}
          </BC.Item>
        );
      });
    } else if (search) {
      return (
        <BC.Item>
          <strong>{productsTotal}</strong> results for <strong>{search}</strong>
        </BC.Item>
      );
    }
    return (
      <BC.Item>
        <strong>All Products</strong>
      </BC.Item>
    );
  };

  return <BC>{showBreadcrumb({ categories, productsTotal, search })}</BC>;
};

export default Breadcrumb;
