import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  scrapeProducts,
  getAllCategories,
  getAllMarketplaces
} from '../../utils/api';

import { InputField, Dropdown } from '../../components';

import { staticText } from '../../utils/data';

import ScraperPage, { LabeledDropDown } from './Scraper.styles';

const Scraper = ({ language }) => {
  const [categories, setCategories] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [scrapingObj, setScrapingObj] = useState({
    marketId: 0,
    categoryId: 0,
    numPages: 0,
    keyword: ''
  });
  const [numScraped, setNumScraped] = useState(0);

  useEffect(() => {
    Promise.all([getAllMarketplaces(), getAllCategories()]).then(
      ([markets, cats]) => {
        setMarkets(markets.data.result.items);
        setScrapingObj(prev => ({
          ...prev,
          marketId: markets.data.result.items[0].id
        }));

        setCategories(cats.data.result.items);
        setScrapingObj(prev => ({
          ...prev,
          categoryId: cats.data.result.items[0].id
        }));
      }
    );
  }, []);

  const scrape = e => {
    e.preventDefault();
    scrapeProducts(scrapingObj)
      .then(res => setNumScraped(res.data.result.length))
      .catch(() => setNumScraped(-1));
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
      <h1>{staticText.scraper.name[language]}</h1>
      <form onSubmit={scrape} onChange={onChange}>
        <InputField
          placeholder={`${staticText.scraper.ex.name[language]} ${staticText.scraper.ex.category[language]}`}
          required
          label={staticText.scraper.keyword[language]}
          nameProp="keyword"
        />
        <LabeledDropDown>
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
        </LabeledDropDown>

        <InputField
          placeholder={`${staticText.scraper.ex.name[language]} 1`}
          required
          label={staticText.scraper.numPages[language]}
          nameProp="numPages"
        />

        <LabeledDropDown>
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
        </LabeledDropDown>

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
