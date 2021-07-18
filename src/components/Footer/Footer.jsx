import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Icon } from 'semantic-ui-react';

import AppFooter from './Footer.styles';
import { staticText } from '../../utils/data';

const Footer = ({ language }) => {
  const { footer } = staticText;

  return (
    <AppFooter direction={language === 'ar' ? 'rtl' : 'ltr'}>
      <Container className="footer-content">
        <div className="contact-us">
          <div className="follow-us">
            <h3>{footer.followUs.title[language]}</h3>
            <div className="social-media">
              <Icon name="youtube" />
              <Icon name="instagram" />
              <Icon name="twitter" />
              <Icon name="facebook f" />
            </div>
          </div>

          <div className="subscription">
            <h3>{footer.subscription.title[language]}</h3>
            <div className="subscribe">
              <input
                type="email"
                name="user-email"
                placeholder={footer.subscription.emailPlaceholder[language]}
              />
              <Icon name="angle right" />
            </div>
          </div>
        </div>

        <div className="nav-groups">
          {footer.nav.map(({ title, links }, i) => (
            <div key={i} className="nav-group">
              <h4 className="group-title">{title[language]}</h4>
              <div className="links">
                {links.map((link, i) => (
                  <Link to={link['en']} key={i} className="link">
                    {link[language]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <p className="copyrights">{footer.copyrights[language]}</p>
    </AppFooter>
  );
};

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(Footer);
