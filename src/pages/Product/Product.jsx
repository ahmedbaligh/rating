import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { staticText } from '../../utils/data';

import {
  PageHero,
  MainInfo,
  ImgGallary,
  CategoryTree,
  ProductName,
  DetailsBtn,
  RatingSection,
  BuyInfo,
  Feedback
} from './Product.styles';

import { Rating } from 'semantic-ui-react';

const Product = ({ language }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const imgs = [
    'https://images-na.ssl-images-amazon.com/images/I/81LmL94PUvS._AC_SL1500_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51okYOUezlS._AC_SL1500_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51VP5aiYl-L._AC_SL1000_.jpg'
  ];
  return (
    <main>
      <PageHero>
        <MainInfo>
          <CategoryTree>
            <Link to="#">test</Link>
            <Link to="#">test</Link>
            <Link to="#">test</Link>
          </CategoryTree>
          <ProductName>
            Apple iPhone 11 Pro Max, 64GB, Space Gray - Unlocked (Renewed
            Premium)
          </ProductName>
          <DetailsBtn>{staticText.product.hero.details[language]}</DetailsBtn>
          <RatingSection>
            <span>{staticText.product.hero.rating.name[language]}</span>
            <Rating defaultRating={3} maxRating={5} disabled />
            <span>15 {staticText.product.hero.rating.ratings[language]}</span>
          </RatingSection>
          <BuyInfo>
            <span>$650</span>
            <button>
              {staticText.product.buy[language]}
              <span>Amazon</span>
            </button>
          </BuyInfo>
          <Feedback>
            <button>{staticText.product.hero.addRating[language]}</button>
            <button>{staticText.product.hero.report[language]}</button>
          </Feedback>
        </MainInfo>
        <ImgGallary>
          <div className="img-container">
            <img src={imgs[imageIndex]} alt="product"></img>
          </div>
          <div className="img-picker">
            {imgs.map((_, i) => (
              <button key={i} onClick={() => setImageIndex(i)}>
                .
              </button>
            ))}
          </div>
        </ImgGallary>
      </PageHero>
    </main>
  );
};

const mapStateToProps = ({ language }) => ({ language });
export default connect(mapStateToProps)(Product);
