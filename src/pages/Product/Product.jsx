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
  Feedback,
  Details,
  OtherSellers,
  SellerCard,
  Reviews,
  Review
} from './Product.styles';

import { Rating } from 'semantic-ui-react';

const Product = ({ language }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [lastViewableReview, setLastViewableReview] = useState(0);

  const imgs = [
    'https://images-na.ssl-images-amazon.com/images/I/81LmL94PUvS._AC_SL1500_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51okYOUezlS._AC_SL1500_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51VP5aiYl-L._AC_SL1000_.jpg'
  ];

  const specifications = {
    'Package Dimensions': '9.09 x 8.54 x 1.69 inches',
    'Item Weight': '1.08 pounds',
    RAM: '64 GB',
    OS: 'IOS',
    Manufacturer: 'Apple Computer',
    'Form Factor': 'Smart Phone',
    'Included Components': 'Charging cable and block'
  };

  const localSpecifications = {
    'ابعاد الطرد': '9.09 x 8.54 x 1.69 inches',
    'وزن الطرد': '1.08 pounds',
    رام: '64 GB',
    'نظام التشغيل': 'IOS',
    'الشركة المصنعة': 'Apple Computer',
    'عامل الشكل': 'Smart Phone',
    'محتويات الطرد': 'Charging cable and block'
  };

  const reviews = [
    {
      id: 'rev0',
      reviewer: 'Leshem Amaya Mejia',
      rating: 4,
      comment:
        'I understand theres bad reviews but the phone I received came in solid fresh like brand new. im definitely loving it and 512gb for 1,000$ (plus taxes), thats a good deal, they go for 1,600 after taxes in the apple website. Im really satisfied and i would strongly recommend it'
    },
    {
      id: 'rev1',
      reviewer: 'Leshem Amaya Mejia',
      rating: 5,
      comment:
        'I understand theres bad reviews but the phone I received came in solid fresh like brand new. im definitely loving it and 512gb for 1,000$ (plus taxes), thats a good deal, they go for 1,600 after taxes in the apple website. Im really satisfied and i would strongly recommend it'
    },
    {
      id: 'rev2',
      reviewer: 'Leshem Amaya Mejia',
      rating: 4,
      comment:
        'I understand theres bad reviews but the phone I received came in solid fresh like brand new. im definitely loving it and 512gb for 1,000$ (plus taxes), thats a good deal, they go for 1,600 after taxes in the apple website. Im really satisfied and i would strongly recommend it'
    },
    {
      id: 'rev3',
      reviewer: 'Leshem Amaya Mejia',
      rating: 4,
      comment:
        'I understand theres bad reviews but the phone I received came in solid fresh like brand new. im definitely loving it and 512gb for 1,000$ (plus taxes), thats a good deal, they go for 1,600 after taxes in the apple website. Im really satisfied and i would strongly recommend it'
    },
    {
      id: 'rev4',
      reviewer: 'Leshem Amaya Mejia',
      rating: 4,
      comment:
        'I understand theres bad reviews but the phone I received came in solid fresh like brand new. im definitely loving it and 512gb for 1,000$ (plus taxes), thats a good deal, they go for 1,600 after taxes in the apple website. Im really satisfied and i would strongly recommend it'
    },
    {
      id: 'rev5',
      reviewer: 'Leshem Amaya Mejia',
      rating: 4,
      comment:
        'I understand theres bad reviews but the phone I received came in solid fresh like brand new. im definitely loving it and 512gb for 1,000$ (plus taxes), thats a good deal, they go for 1,600 after taxes in the apple website. Im really satisfied and i would strongly recommend it'
    }
  ];

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

  const specs = language === 'ar' ? localSpecifications : specifications;
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
              <button key={`img${i}`} onClick={() => setImageIndex(i)}>
                .
              </button>
            ))}
          </div>
        </ImgGallary>
      </PageHero>
      <Details>
        <h2>{staticText.product.details.heading[language]}</h2>
        <p>
          Shoot amazing videos and photos with the Ultra Wide, Wide, and
          Telephoto cameras. Capture your best low-light photos with Night mode.
          Watch HDR movies and shows on the Super Retina XDR display—the
          brightest iPhone display yet. Experience unprecedented performance
          with A13 Bionic for gaming, augmented reality (AR), and photography.
        </p>
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
        {reviews.slice(lastViewableReview, 5).map(review => (
          <Review key={review.id}>
            <div className="review-header">
              <span className="name">{review.reviewer}</span>
              <Rating defaultRating={review.rating} maxRating={5} disabled />
            </div>
            <p>{review.comment}</p>
          </Review>
        ))}
        <div className="controller">
          <button
            disabled={lastViewableReview <= 0}
            onClick={() => setLastViewableReview(lastViewableReview - 4)}
          >
            {staticText.product.reviews.prev[language]}
          </button>
          <button
            disabled={lastViewableReview >= reviews.length - 5}
            onClick={() => setLastViewableReview(lastViewableReview + 4)}
          >
            {staticText.product.reviews.next[language]}
          </button>
        </div>
      </Reviews>
    </main>
  );
};

const mapStateToProps = ({ language }) => ({ language });
export default connect(mapStateToProps)(Product);
