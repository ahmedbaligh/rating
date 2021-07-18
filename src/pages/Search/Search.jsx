import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import { searchByKeyword } from '../../utils/api';
import { toggleLoading } from '../../redux/actions/loading';
import { extractFilters, filterProducts } from '../../utils/helpers/helpers';

import Result from './Search.styles';
import { ProductCard, Dropdown } from '../../components';
import { useUpdate } from '../../hooks';

import { Checkbox } from 'semantic-ui-react';

const Search = ({ toggleLoading }) => {
  const MAX_COUNT = 20;

  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const { keyword, category } = useParams();

  const [filterNames, setFilterNames] = useState({ categories: [], specs: [] });
  const [appliedFilters, setAppliedFilters] = useState({
    category: '',
    specs: {}
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sortOpts = [
    { key: 'srtopt1000', value: 'desc%Srating', text: 'Top Rated' },
    { key: 'srtopt1001', value: 'asc%Sprice', text: 'Lowest Price' },
    { key: 'srtopt1002', value: 'desc%Sprice', text: 'Highest Price' }
  ];
  const [sortAtrr, setSortAtrr] = useState(sortOpts[0].value);

  const resetState = () => {
    setAllProducts([]);
    setPage(0);
    setFilterNames({ categories: [], specs: [] });
    setAppliedFilters({
      category: '',
      specs: {}
    });
    setFilteredProducts([]);
  };

  useEffect(() => {
    toggleLoading(true);
    searchByKeyword({ keyword, maxCount: MAX_COUNT })
      .then(res => {
        setAllProducts(res.data.result.items);
      })
      .finally(() => toggleLoading(0));
    return () => resetState();
  }, [keyword, category, toggleLoading]);

  useUpdate(() => {
    setFilterNames(extractFilters(allProducts));
  }, [allProducts]);

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
      })
    );
  }, [appliedFilters, allProducts]);

  return (
    <>
      <Result>
        <div className="filters-container">
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
              <span>
                Search results for <b>{keyword}</b>
              </span>
              <div className="result-sort">
                Sort by
                <Dropdown
                  id="category"
                  value={sortAtrr}
                  options={sortOpts}
                  onChange={(_, { value }) => setSortAtrr(value)}
                />
              </div>
            </div>
            {filteredProducts?.map(product => (
              <ProductCard key={`prdct${product.id}`} product={product} />
            ))}
          </div>
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
