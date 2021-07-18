import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Accordion, Icon } from 'semantic-ui-react';

import AppFAQ from './FAQ.styles';
import { staticText } from '../../utils/data';

const FAQ = ({ language }) => {
  const { faq } = staticText;

  const [activeIndex, setActiveIndex] = useState(0);

  const onFAQChange = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  return (
    <AppFAQ>
      <div className="faq-card">
        <h1>{faq.heading[language]}</h1>
        <p className="contact-us">{faq.contactUS[language]}</p>

        <div className="wrapper">
          <Accordion fluid>
            {faq.questions.map((text, i) => (
              <div className="question" key={i}>
                <Accordion.Title
                  key={i}
                  active={activeIndex === i}
                  index={i}
                  onClick={onFAQChange}
                >
                  <Icon name="dropdown" />
                  {text.question[language]}
                </Accordion.Title>

                <Accordion.Content active={activeIndex === i}>
                  <p>{text.answer[language]}</p>
                </Accordion.Content>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </AppFAQ>
  );
};

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(FAQ);
