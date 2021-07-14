import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { TopStores, InputField, Slider } from '../../components';
import { SignupContainer, Button, SignCard } from './Signup.styles';
import { logoGoogle } from '../../assets/Sign';
import { staticText } from '../../utils/data';
import { useUpdate } from '../../hooks';

const Signup = ({ language }) => {
  const { signup } = staticText;

  const [inputs, setInputs] = useState({});
  const [areValid, setAreValid] = useState(false);

  useUpdate(() => {
    setAreValid(() => {
      for (const key in inputs) if (!inputs[key].valid) return false;

      return true;
    });
  }, [inputs]);

  const validateInputs = useCallback(input => {
    setInputs(prev => ({ ...prev, ...input }));
  }, []);

  const onSignup = e => {
    e.preventDefault();
    console.log(
      Object.keys(inputs).reduce(
        (acc, key) => ({
          ...acc,
          [key]: inputs[key].value
        }),
        {}
      )
    );
  };

  return (
    <SignupContainer language={language}>
      <section className="signup-slider" dir="ltr">
        <Slider />
      </section>

      <section className="signup-content">
        <SignCard>
          <div className="wrapper">
            <h1>{signup.heading[language]}</h1>

            <div className="social-sign">
              <Button.SocialSign>
                <div className="logo-container">
                  <img src={logoGoogle} alt="Google Logo" />
                </div>
                <span className="name">Google</span>
              </Button.SocialSign>
            </div>

            <div className="divider">
              <span className="text">{signup.divider[language]}</span>
              <hr />
            </div>

            <form className="signup-form" onSubmit={onSignup}>
              <div className="input-group">
                <InputField
                  label={signup.fields.name.label[language]}
                  placeholder={signup.fields.name.placeholder[language]}
                  error={signup.fields.name.error[language]}
                  required
                  onValidate={validateInputs}
                />

                <InputField
                  label={signup.fields.username.label[language]}
                  placeholder={signup.fields.username.placeholder[language]}
                  error={signup.fields.username.error[language]}
                  required
                  onValidate={validateInputs}
                />
              </div>

              <InputField
                label={signup.fields.email.label[language]}
                placeholder={signup.fields.email.placeholder[language]}
                error={signup.fields.email.error[language]}
                type="email"
                required
                onValidate={validateInputs}
              />

              <div className="input-group">
                <InputField
                  label={signup.fields.password.label[language]}
                  placeholder={signup.fields.password.placeholder[language]}
                  error={signup.fields.password.error[language]}
                  type="password"
                  required
                  onValidate={validateInputs}
                />

                <InputField
                  label={signup.fields.confirmPassword.label[language]}
                  placeholder={
                    signup.fields.confirmPassword.placeholder[language]
                  }
                  error={signup.fields.confirmPassword.error[language]}
                  type="password"
                  required
                  onValidate={validateInputs}
                  checkAgainst={inputs.password?.value ?? ''}
                />
              </div>

              <div className="sign-actions">
                <Button.Sign
                  type="submit"
                  className="submit"
                  disabled={!areValid}
                >
                  {signup.actions.button[language]}
                </Button.Sign>
                <p className="sign-switch">
                  {signup.actions.signSwitch.text[language]}{' '}
                  <span className="action">
                    {signup.actions.signSwitch.action[language]}
                  </span>
                </p>
              </div>
            </form>

            <TopStores className="top-stores" />
          </div>
        </SignCard>
      </section>
    </SignupContainer>
  );
};

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(Signup);
