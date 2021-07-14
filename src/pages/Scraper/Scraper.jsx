import React from 'react';
import { scrapeProducts } from '../../utils/api';

const Scraper = () => {
  const scrape = e => {
    e.preventDefault();
    scrapeProducts({
      marketId: 2,
      categoryId: 1003,
      numPages: 1,
      keyword: 'xiaomi'
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };
  return (
    <form onSubmit={scrape}>
      <button type="submit">+ Scrape products</button>
    </form>
  );
};

export default Scraper;
