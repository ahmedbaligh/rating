import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import HomePage from './Home.styles';
import { SearchBar, Button } from '../../components';
import { staticText } from '../../utils/data';
import string from '../../utils/helpers/strings';
import { getProductsCount } from '../../utils/helpers/helpers';
import { HomeAssets } from '../../assets';

const Home = ({ language }) => {
  const history = useHistory();

  const [focus, setFocus] = useState(false);
  const [subscriptionEmail, setSubscriptionEmail] = useState('');

  const { home } = staticText;

  const onSearch = e => {
    e.preventDefault();

    const searchString = e.target.querySelector('input').value;
    history.push(`/search/${searchString}`);
  };

  const onSubscription = () => setSubscriptionEmail('');

  return (
    <HomePage language={language}>
      <main className="main-container">
        <section className="hero section">
          <div className="wrapper">
            <div className="brand">
              <div className="brand-texts">
                {home.hero.brandText.map((text, i) => (
                  <p key={i} className="brand-text">
                    {text[language]}
                  </p>
                ))}
              </div>

              <Button
                className="main-action"
                action={() => setFocus(prev => !prev)}
              >
                {home.hero.button[language]}
              </Button>
            </div>

            <div className="hero-illustration">
              <img src={HomeAssets.heroFamily} alt="Hero illustration" />
            </div>
          </div>
        </section>

        <section className="search section">
          <div className="wrapper">
            <h2 className="section-heading">{home.search.heading[language]}</h2>

            <form className="search-form" onSubmit={onSearch}>
              <SearchBar
                language={language}
                placeholder={home.search.searchPlaceholder[language]}
                fluid
                externalfocus={focus}
              />

              <Button className="search-main">
                {home.search.button[language]}
              </Button>
            </form>
          </div>
        </section>

        <section className="categories section">
          {home.categories.names.map(({ name }) => (
            <div className="category" key={string.toKebabCase(name['en'])}>
              <header className="category-header">
                <h3 className="category-name">{name[language]}</h3>
                <h4 className="products-count">
                  {getProductsCount(string.toCamelCase(name['en']), language)}{' '}
                  {home.categories.countUnit[language]}
                </h4>
              </header>

              <div className="category-illustration">
                <img
                  loading="lazy"
                  src={HomeAssets[string.toCamelCase(name['en'])]}
                  alt={string.toKebabCase(name['en'])}
                />
              </div>
            </div>
          ))}
        </section>

        <section className="newsletter section">
          <div className="wrapper">
            <div className="newsletter-illustration">
              <img
                loading="lazy"
                src={HomeAssets.newsletter}
                alt="Newsletter"
              />
            </div>

            <div className="newsletter-content">
              <h2 className="section-heading">
                {home.newsletter.heading[language]}
              </h2>
              <p className="section-description">
                {home.newsletter.description[language]}
              </p>
              <input
                type="email"
                name="user-email"
                placeholder={home.newsletter.emailPlaceholder[language]}
                value={subscriptionEmail}
                onChange={e => setSubscriptionEmail(e.target.value)}
              />
              <Button className="subscribe" action={onSubscription}>
                {home.newsletter.button[language]}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </HomePage>
  );
};

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(Home);
