import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { search, getCategoryTree } from '../../utils/api';
import { toggleLoading } from '../../redux/actions/loading';
import { extractFilters, filterProducts } from '../../utils/helpers/helpers';

import Result from './Search.styles';
import { ProductCard, Dropdown } from '../../components';
import { useUpdate } from '../../hooks';

import { Checkbox } from 'semantic-ui-react';
import { staticText } from '../../utils/data';

const Search = ({ toggleLoading, language }) => {
  const MAX_COUNT = 20;

  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const { keyword, category } = useParams();

  const [filterNames, setFilterNames] = useState({ categories: [], specs: [] });
  const [appliedFilters, setAppliedFilters] = useState({
    category: '',
    specs: {}
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sortOpts = [
    {
      key: 'srtopt1000',
      value: 'desc%Srating',
      text: staticText.search.sort.topRated[language]
    },
    {
      key: 'srtopt1001',
      value: 'asc%Sprice',
      text: staticText.search.sort.lowPrice[language]
    },
    {
      key: 'srtopt1002',
      value: 'desc%Sprice',
      text: staticText.search.sort.highPrice[language]
    }
  ];
  const [sortAtrr, setSortAtrr] = useState(sortOpts[0].value);

  const [categoryTree, setCategoryTree] = useState([]);

  useEffect(() => {
    console.log(category);
    toggleLoading(true);
    search({ keyword, maxCount: MAX_COUNT, page: page, category })
      .then(res => {
        setAllProducts(prev => [...prev, ...res.data.result.items]);
        if (res.data.result.totalCount < MAX_COUNT) setLastPage(true);
      })
      .finally(() => toggleLoading(0));
  }, [keyword, category, toggleLoading, page]);

  useUpdate(() => {
    setFilterNames(extractFilters(allProducts));
  }, [allProducts]);

  useEffect(() => {
    if (category) {
      getCategoryTree(category).then(res => {
        setCategoryTree(res);
      });
    }
  }, [category]);

  const onChange = (e, { value, checked, name }) => {
    e.preventDefault();
    setAppliedFilters(prev => ({
      ...prev,
      specs: {
        ...prev.specs,
        [name]: checked
          ? prev.specs[name]
            ? [...prev.specs[name], value]
            : [value]
          : prev.specs[name].filter(v => v !== value)
      }
    }));
  };

  useUpdate(() => {
    setFilteredProducts(
      filterProducts({
        products: allProducts,
        category: appliedFilters.category,
        specs: appliedFilters.specs
      })?.sort((a, b) => compare(a, b, sortAtrr))
    );
  }, [appliedFilters, allProducts]);

  const compare = (a, b, value) => {
    const atrr = value.split('%S')[1];
    const order = value.split('%S')[0];
    let res = 0;
    switch (atrr) {
      case 'price':
        res =
          parseFloat(b[atrr].toString().replaceAll(',', '')) -
          parseFloat(a[atrr].toString().replaceAll(',', ''));
        break;
      default:
        res = b[atrr] - a[atrr];
    }
    if (order === 'asc') res = res * -1;
    return res;
  };

  const onSortChange = (_, { value }) => {
    setSortAtrr(value);
    setFilteredProducts(prev => prev.sort((a, b) => compare(a, b, value)));
  };

  return (
    <>
      <Result>
        <div className="filters-container">
          {!category && (
            <div className="filter">
              <h3>Categories</h3>
              <ul className="values">
                {filterNames.categories?.map((category, i) => (
                  <li
                    className={
                      appliedFilters.category === category ? 'active' : ''
                    }
                    key={`fltrctgry${category}${i}`}
                    onClick={() =>
                      setAppliedFilters({ ...appliedFilters, category })
                    }
                  >
                    {category}
                  </li>
                ))}
                {appliedFilters.category ? (
                  <button
                    className="clear-btn"
                    onClick={() =>
                      setAppliedFilters({ ...appliedFilters, category: '' })
                    }
                  >
                    clear
                  </button>
                ) : (
                  ''
                )}
              </ul>
            </div>
          )}

          <div className="filters">
            <h3>Filters</h3>
            {filterNames.specs?.map((spec, i) => (
              <div className="filter" key={`spcfltr${i}`}>
                <h4>{spec.name}</h4>

                <form className="values">
                  {spec.values.map((value, i) => (
                    <Checkbox
                      name={spec.name}
                      key={`spcvltrvlu${spec.name}${i}`}
                      label={value}
                      onChange={onChange}
                      value={value}
                      checked={appliedFilters.specs[spec.name]?.includes(value)}
                    ></Checkbox>
                  ))}
                  {appliedFilters.specs[spec.name]?.length ? (
                    <button
                      type="button"
                      className="clear-btn"
                      onClick={() =>
                        setAppliedFilters(prev => ({
                          ...prev,
                          specs: { ...prev.specs, [spec.name]: [] }
                        }))
                      }
                    >
                      clear
                    </button>
                  ) : (
                    ''
                  )}
                </form>
              </div>
            ))}
          </div>
        </div>
        <div className="result-container">
          <div className="card-list">
            <div className="result-header">
              {category ? (
                <div className="category-tree">
                  {categoryTree.map((cat, i) => (
                    <span key={`categ${cat.id}`}>
                      {i !== 0 && '>'}
                      <Link to={`/search/category/${cat.id}`}>{cat.name}</Link>
                    </span>
                  ))}
                </div>
              ) : (
                <span>
                  {staticText.search.result[language]} <b>{keyword}</b>
                </span>
              )}
              <div className="result-sort">
                {staticText.search.sort.name[language]}
                <Dropdown
                  id="category"
                  value={sortAtrr}
                  options={sortOpts}
                  onChange={onSortChange}
                />
              </div>
            </div>
            {filteredProducts?.map(product => (
              <ProductCard key={`prdct${product.id}`} product={product} />
            ))}
          </div>
          {!lastPage ? (
            <button
              className="show-more-btn"
              onClick={() => setPage(prev => prev + 1)}
            >
              {staticText.search.showMore[language]}
            </button>
          ) : (
            ''
          )}
        </div>
      </Result>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleLoading: start => dispatch(toggleLoading(start))
});

const mapStateToProps = ({ language }) => ({ language });
export default connect(mapStateToProps, mapDispatchToProps)(Search);
