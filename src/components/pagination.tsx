import React, { ReactElement } from "react";
import { Pagination as PG } from "react-bootstrap";

type Props = {
  productsTotal: number;
  pageQty: number;
  pageCurr: number;
  changePage: (page: number, qty?: number) => Promise<void>;
};

const Pagination = ({ productsTotal, pageQty, pageCurr, changePage }: Props): ReactElement => {
  const mountPagination = (pages: number[], page: number, total: number) => {
    const items = [];
    items.push(<PG.First key="fisrt" disabled={page === 1} onClick={() => changePage(1)} />);
    items.push(<PG.Prev key={0} disabled={page === 1} onClick={() => changePage(page - 1)} />);
    pages.forEach((i) => {
      items.push(
        <PG.Item key={i} active={i === page} onClick={() => changePage(i)}>
          {i}
        </PG.Item>,
      );
    });
    items.push(<PG.Next key={total + 1} disabled={page === total} onClick={() => changePage(page + 1)} />);
    items.push(<PG.Last key="last" disabled={page === total} onClick={() => changePage(total)} />);
    return items;
  };

  const total = Math.ceil(productsTotal / pageQty);
  let page = pageCurr;
  if (pageCurr > total) page = total;

  const max = 10;
  let start: number, end: number;
  if (total <= max) {
    start = 1;
    end = total;
  } else {
    const maxBefore = Math.floor(max / 2);
    const maxAfter = Math.ceil(max / 2) - 1;
    if (page <= maxBefore) {
      start = 1;
      end = max;
    } else if (page + maxAfter >= total) {
      start = page - max + 1;
      end = total;
    } else {
      start = page - maxBefore;
      end = page + maxAfter;
    }
  }
  const pages = Array.from(Array(end + 1 - start).keys()).map((i) => start + i);
  return <PG>{mountPagination(pages, page, total)}</PG>;
};

export default Pagination;
