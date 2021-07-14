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
    numPages: 0,
    keyword: ''
  });
  const [numScraped, setNumScraped] = useState(0);

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
    setLoading(true);
    scrapeProducts(scrapingObj)
      .then(res => setNumScraped(res.data.result.length))
      .catch(() => setNumScraped(-1))
      .finally(() => setLoading(false));
  };
  const onChange = (e, value, name) => {
    e.preventDefault();
    setScrapingObj(prev => ({
      ...prev,
      [name || e.target.name]: name ? value : e.target.value
    }));
  };

  return (
    <ScraperPage>
      {loading ? <Loading /> : ''}
      <h1>{staticText.scraper.name[language]}</h1>
      <form onSubmit={scrape} onChange={onChange}>
        <InputField
          placeholder={`${staticText.scraper.ex.name[language]} ${staticText.scraper.ex.category[language]}`}
          required
          label={staticText.scraper.keyword[language]}
          nameProp="keyword"
        />
        <div className="labeled-dropdown">
          <label htmlFor="category">
            {staticText.scraper.category[language]}
          </label>
          <Dropdown
            id="category"
            value={scrapingObj['categoryId']}
            options={categories?.map(cat => ({
              key: `catlist${cat.id}`,
              text: cat.name,
              value: cat.id
            }))}
            onChange={(e, { value }) => onChange(e, value, 'categoryId')}
          />
        </div>

        <InputField
          placeholder={`${staticText.scraper.ex.name[language]} 1`}
          required
          label={staticText.scraper.numPages[language]}
          nameProp="numPages"
        />

        <div className="labeled-dropdown">
          <label htmlFor="marketplace">
            {staticText.scraper.market[language]}
          </label>
          <Dropdown
            id="marketplace"
            value={scrapingObj['marketId']}
            options={markets?.map(market => ({
              key: `martlist${market.id}`,
              text: language === 'ar' ? market.localName : market.name,
              value: market.id
            }))}
            onChange={(e, { value }) => onChange(e, value, 'marketId')}
          />
        </div>

        <button type="submit">+ {staticText.scraper.scrape[language]}</button>
      </form>
      {numScraped ? (
        <p>
          {`${
            numScraped === -1
              ? staticText.scraper.scraped.error[language]
              : `${numScraped} ${staticText.scraper.scraped[language]}`
          }`}
        </p>
      ) : (
        ''
      )}
    </ScraperPage>
  );
};

export default connect(({ language }) => ({ language }))(Scraper);
