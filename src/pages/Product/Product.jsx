import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { staticText } from '../../utils/data';
import { getProduct, getCategoryTree } from '../../utils/api';
import { jsonParse } from '../../utils/helpers/helpers';

import { Loading } from '../../components';
import { Rating } from 'semantic-ui-react';

import {
  ProductPage,
  PageHero,
  MainInfo,
  ImgGallary,
  CategoryTree,
  ProductName,
  DetailsBtn,
  RatingSection,
  BuyInfo,
  Feedback,
  Details,
  OtherSellers,
  SellerCard,
  Reviews,
  Review
} from './Product.styles';

const Product = ({ language }) => {
  const [lastViewableReview, setLastViewableReview] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const details = useRef(null);
  const [categoryTree, setCategoryTree] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    getProduct(slug).then(res => {
      const product = res.data.result;
      setProduct(product);
      getCategoryTree(product?.productCategory.id)
        .then(res => {
          setCategoryTree(res);
        })
        .finally(() => setLoading(false));
    });
  }, [slug]);

  const sellers = [
    {
      id: 'sel0',
      name: 'Ebay',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/EBay_logo.png/800px-EBay_logo.png',
      price: '$650'
    },
    {
      id: 'sel1',
      name: 'Jumia',
      logo: 'https://getcake.com/wp-content/uploads/2017/03/Jumia-logo.png',
      price: '$750'
    },
    {
      id: 'sel2',
      name: 'Souq',
      logo: 'https://cdn.worldvectorlogo.com/logos/souq-logo-primary-en.svg',
      price: '$850'
    },
    {
      id: 'sel3',
      name: 'Souq',
      logo: 'https://cdn.worldvectorlogo.com/logos/souq-logo-primary-en.svg',
      price: '$650'
    }
  ];

  const [viewableSellers, setViewableSellers] = useState(sellers.slice(0, 3));

  let specs = product
    ? jsonParse(
        product[language === 'en' ? 'specifications' : 'localSpecifications']
      )
    : '';

  let reviews = product ? jsonParse(product['reviews']) : '';

  const scrollToDetails = () => {
    const sectionY =
      details.current.offsetTop - document.querySelector('header').clientHeight;
    window.scrollTo({
      top: sectionY,
      left: 0,
      behavior: 'smooth'
    });
  };

  return loading ? (
    <ProductPage>
      <Loading withContainer />
    </ProductPage>
  ) : !product ? (
    <Redirect to="/404-NOT-FOUND" />
  ) : (
    <ProductPage>
      <PageHero>
        <MainInfo>
          <CategoryTree>
            {categoryTree.map((cat, i) => (
              <span key={`categ${cat.id}`}>
                {i !== 0 && '>'}
                <Link to={`/category/${cat.name}`}>{cat.name}</Link>
              </span>
            ))}
          </CategoryTree>
          <ProductName>
            {product[language === 'en' ? 'name' : 'localName']}
          </ProductName>
          <DetailsBtn onClick={scrollToDetails}>
            {staticText.product.hero.details[language]}
          </DetailsBtn>
          <RatingSection>
            <span>{staticText.product.hero.rating.name[language]}</span>
            <Rating defaultRating={product.rating} maxRating={5} disabled />
            <span>{`${product.reviewsCount} ${staticText.product.hero.rating.ratings[language]}`}</span>
          </RatingSection>
          <BuyInfo>
            <span>{`${product.price} ${staticText.product.hero.currency[language]}`}</span>
            <a href={product.url} target="_blank" rel="noreferrer">
              {staticText.product.buy[language]}
              <span>
                {product.marketPlace[language === 'en' ? 'name' : 'localName']}
              </span>
            </a>
          </BuyInfo>
          <Feedback>
            <button>{staticText.product.hero.addRating[language]}</button>
            <button>{staticText.product.hero.report[language]}</button>
          </Feedback>
        </MainInfo>
        <ImgGallary>
          <div className="img-container">
            <img src={product.images} alt="product"></img>
          </div>
        </ImgGallary>
      </PageHero>
      <Details ref={details}>
        <h2>{staticText.product.details.heading[language]}</h2>
        <h2>{staticText.product.details.specs[language]}</h2>
        <table>
          <tbody>
            {Object.keys(specs).map((spec, i) => (
              <tr key={`spc${i}`}>
                <th>{spec}</th>
                <td>{specs[spec]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Details>
      <OtherSellers>
        <h2>{staticText.product.other.heading[language]}</h2>
        <div className="cards-list">
          {viewableSellers.map(seller => (
            <SellerCard key={seller.id}>
              <img src={seller.logo} alt={seller.name}></img>
              <a href="https://www.google.com/">{`${staticText.product.buy[language]} ${seller.name}`}</a>
              {seller.price}
            </SellerCard>
          ))}
        </div>
        {sellers.length > viewableSellers.length ? (
          <button onClick={() => setViewableSellers(sellers)}>
            + {staticText.product.other.showAll[language]}
          </button>
        ) : (
          ''
        )}
      </OtherSellers>
      <Reviews>
        <h2>{staticText.product.reviews.heading[language]}</h2>
        <div className="reviews-container">
          {reviews
            .slice(lastViewableReview, lastViewableReview + 3)
            .map((review, i) => (
              <Review key={`revw${i}`}>
                <div className="review-header">
                  <span className="name">{review.User}</span>
                  <Rating
                    defaultRating={review.Rating}
                    maxRating={5}
                    disabled
                  />
                </div>
                <p>{review.Comment}</p>
              </Review>
            ))}
        </div>
        <div className="controller">
          <button
            disabled={lastViewableReview <= 0}
            onClick={() => setLastViewableReview(lastViewableReview - 3)}
          >
            {staticText.product.reviews.prev[language]}
          </button>
          <button
            disabled={lastViewableReview >= reviews.length - 3}
            onClick={() => setLastViewableReview(lastViewableReview + 3)}
          >
            {staticText.product.reviews.next[language]}
          </button>
        </div>
      </Reviews>
    </ProductPage>
  );
};

const mapStateToProps = ({ language, darkTheme }) => ({ language, darkTheme });
export default connect(mapStateToProps)(Product);
