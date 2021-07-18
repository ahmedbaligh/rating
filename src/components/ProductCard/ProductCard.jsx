import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from './ProductCard.styles';
import { Rating } from 'semantic-ui-react';

import { staticText } from '../../utils/data';

const ProductCard = ({ product, language }) => {
  const name =
    product.name.length > 51
      ? `${product.name.substr(0, 51).trim()}...`
      : product.name;

  return (
    <Card img={product.image}>
      <div className="img-container"></div>

      <Link to={`/product/${product.id}`} className="product-name">
        {name}
      </Link>

      <div className="card-info">
        <span className="product-price">{`${product.price} ${staticText.product.hero.currency[language]}`}</span>
        <Rating defaultRating={product.rating} maxRating={5} disabled />
      </div>

      <div className="card-info">
        <span className="market-name">{product.marketPlace}</span>
        <Link to={`/product/${product.id}`}>
          {staticText.search.details[language]}
        </Link>
      </div>
    </Card>
  );
};

export default connect(({ language }) => ({ language }))(ProductCard);
