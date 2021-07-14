import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  scrapeProducts,
  getAllCategories,
  getAllMarkets
} from '../../utils/api';

import { useDidMount } from '../../hooks';
import { Loading, InputField, Dropdown } from '../../components';

import { staticText } from '../../utils/data';

import ScraperPage from './Scraper.styles';

const Scraper = ({ language }) => {
  const [categories, setCategories] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrapingObj, setScrapingObj] = useState({
    marketId: 0,
    categoryId: 0,
    NumberOfPages: 0,
    keyword: ''
  });

  useDidMount(() => {
    getAllMarkets()
      .then(res => {
        setMarkets(res.data.result.items);
        setScrapingObj(prev => ({
          ...prev,
          marketId: res.data.result.items[0].id
        }));
      })
      .then(() => {
        getAllCategories()
          .then(res => {
            console.log(res.data.result.items);
            setCategories(res.data.result.items);
            setScrapingObj(prev => ({
              ...prev,
              categoryId: res.data.result.items[0].id
            }));
          })
          .finally(() => setLoading(false));
      });
  }, [
    getAllCategories,
    getAllMarkets,
    setMarkets,
    setCategories,
    setScrapingObj
  ]);

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
  const onChange = (e, value, name) => {
    e.preventDefault();
    setScrapingObj(prev => ({
      ...prev,
      [name || e.target.name]: name ? value : e.target.value
    }));
  };

  return loading ? (
    <ScraperPage>
      <Loading />
    </ScraperPage>
  ) : (
    <ScraperPage>
      <form onSubmit={scrape} onChange={onChange}>
        <InputField placeholder="Ex. nokia" required label="keyword" />
        <div className="labeled-dropdown">
          <label htmlFor="category">
            {staticText.scraper.category[language]}
          </label>
          <Dropdown
            id="category"
            value={scrapingObj['categoryId']}
            options={categories.map(cat => ({
              key: `catlist${cat.id}`,
              text: cat.name,
              value: cat.id
            }))}
            onChange={(e, { value }) => onChange(e, value, 'categoryId')}
          />
        </div>

        <InputField placeholder="Ex. 1" required label="Number of pages" />

        <div className="labeled-dropdown">
          <label htmlFor="marketplace">
            {staticText.scraper.market[language]}
          </label>
          <Dropdown
            id="marketplace"
            value={scrapingObj['marketId']}
            options={markets.map(market => ({
              key: `martlist${market.id}`,
              text: language === 'ar' ? market.localName : market.name,
              value: market.id
            }))}
            onChange={(e, { value }) => onChange(e, value, 'marketId')}
          />
        </div>

        <button type="submit">+ {staticText.scraper.scrape[language]}</button>
      </form>
    </ScraperPage>
  );
};

export default connect(({ language }) => ({ language }))(Scraper);
