import styled from 'styled-components';

import { SignupContainer, SignCard, Button } from '../Signup/Signup.styles';

const SigninContainer = styled(SignupContainer)`
  justify-content: center;
  align-items: center;
  padding: 75px 15px;

  .signup-slider {
    flex-basis: auto;
  }

  .signup-content {
    flex-basis: auto;
    display: block;
    justify-content: flex-start;
  }

  @media (max-width: 1000px) {
    .signup-content {
      flex-basis: auto;
    }
  }
`;

const SigninCard = styled(SignCard)`
  width: clamp(600px, 65vw, 800px);
  justify-content: center;
  align-items: center;

  .wrapper {
    width: max(80%, 400px);

    .signin-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-bottom: 60px;

      /* .sign-switch {
        transition: color ${({ theme }) => theme.transitionDuration};
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => (theme.dark ? theme.gray700 : theme.black700)};

        .action {
          transition: color ${({ theme }) => theme.transitionDuration};
          color: ${({ theme }) => theme.blue900};
          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.blue500};
          }
        }
      } */
    }
  }

  @media (max-width: 600px) {
    flex-basis: clamp(600px, 80vw, 1000px);

    .wrapper {
      width: 100%;
      padding-inline: 40px;
    }
  }
`;

export { SigninContainer, SigninCard, Button };
