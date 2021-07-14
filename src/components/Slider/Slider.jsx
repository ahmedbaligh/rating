import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import AppSlider from './Slider.styles';
import { SignAssets } from '../../assets';
import { staticText } from '../../utils/data';

const Slider = ({ language }) => (
  <AppSlider className="slider">
    <Carousel
      autoPlay
      emulateTouch
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      interval={5000}
    >
      {staticText.slider.map(({ name, legend }) => (
        <div key={name} className="slider-item">
          <img src={SignAssets[name]} alt="name" />
          <p className="legend" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {legend[language]}
          </p>
        </div>
      ))}
    </Carousel>
  </AppSlider>
);

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(Slider);
