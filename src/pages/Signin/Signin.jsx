import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { TopStores, InputField } from '../../components';
import { SigninContainer, SigninCard, Button } from './Signin.styles';
import { logoGoogle } from '../../assets/Sign';
import { staticText } from '../../utils/data';
import { useUpdate } from '../../hooks';
import { api } from '../../utils/api';

const Signin = ({ language }) => {
  const { signin } = staticText;

  const history = useHistory();

  const [inputs, setInputs] = useState({});
  const [areValid, setAreValid] = useState(false);
  const [signinError, setSigninError] = useState(false);

  useUpdate(() => {
    setAreValid(() => {
      for (const key in inputs) if (!inputs[key].valid) return false;

      return true;
    });
  }, [inputs]);

  const validateInputs = useCallback(input => {
    setInputs(prev => ({ ...prev, ...input }));
  }, []);

  const onSignin = async e => {
    e.preventDefault();

    const signinData = Object.entries(inputs).reduce(
      (acc, [key, { value }]) => ({ ...acc, [key]: value }),
      {}
    );

    try {
      await api.signin(signinData);
      setSigninError(false);
      history ? history.goBack() : history.push('/');
    } catch (error) {
      setSigninError(true);
    }
  };

  return (
    <SigninContainer language={language}>
      <SigninCard className="signin-content">
        <div className="wrapper">
          <h1>{signin.heading[language]}</h1>

          <div className="social-sign">
            <Button.SocialSign>
              <div className="logo-container">
                <img src={logoGoogle} alt="Google Logo" />
              </div>
              <span className="name">Google</span>
            </Button.SocialSign>
          </div>

          <div className="divider">
            <span className="text">{signin.divider[language]}</span>
            <hr />
          </div>

          <form className="signin-form" onSubmit={onSignin}>
            {signinError && (
              <div className="invalid-sign">
                <p className="invalid-text">{signin.error[language]}</p>
              </div>
            )}

            <InputField
              label={signin.fields.usernameEmail.label[language]}
              placeholder={signin.fields.usernameEmail.placeholder[language]}
              error={signin.fields.usernameEmail.error[language]}
              required
              onValidate={validateInputs}
            />

            <InputField
              label={signin.fields.password.label[language]}
              placeholder={signin.fields.password.placeholder[language]}
              error={signin.fields.password.error[language]}
              type="password"
              required
              onValidate={validateInputs}
            />

            <div className="sign-actions">
              <Button.Sign
                type="submit"
                className="submit"
                disabled={!areValid}
              >
                {signin.actions.button[language]}
              </Button.Sign>
              <p className="sign-switch">
                {signin.actions.signSwitch.text[language]}{' '}
                <Link to="signup" className="action">
                  {signin.actions.signSwitch.action[language]}
                </Link>
              </p>
            </div>
          </form>

          <TopStores className="top-stores" />
        </div>
      </SigninCard>
    </SigninContainer>
  );
};

const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps)(Signin);
