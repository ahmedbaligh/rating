import styled from 'styled-components';

export const Button = {
  Sign: styled.button`
    transition: background ${({ theme }) => theme.transitionDuration};
    cursor: pointer;
    width: 100%;
    height: 45px;
    margin: 8px 0;
    border-radius: 4px;
    font: inherit;
    font-size: 16px;
    color: ${({ theme }) => theme.white900};
    background: ${({ theme }) => theme.blue900};
    user-select: none;

    &:hover {
      background: ${({ theme }) => theme.blue500};
    }

    &:disabled {
      transition: background ${({ theme }) => theme.transitionDuration};
      background: ${({ theme }) =>
        theme.dark ? theme.gray700 : theme.gray100};
      color: ${({ theme }) => theme.white700};
      font: inherit;
      cursor: not-allowed;
    }
  `,
  SocialSign: styled.button`
    transition: background ${({ theme }) => theme.transitionDuration};
    background: ${({ theme }) => theme.blue900};
    color: ${({ theme }) => theme.white900};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    font: 600 16px ${({ theme }) => theme.font.family};
    position: relative;
    border-radius: 5px;

    .logo-container {
      position: absolute;
      width: 45px;
      height: 40px;
      background: ${({ theme }) => theme.white900};
      border-radius: 6px;
      padding: 9px 11px;
      left: 2px;
    }
  `
};

export const SignupContainer = styled.main`
  transition: background ${({ theme }) => theme.transitionDuration};
  background: ${({ theme }) => (theme.dark ? theme.black900 : theme.blue500)};
  display: flex;
  padding: 70px 0;

  .signup-slider {
    flex-basis: 50%;
  }

  .signup-content {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    padding: 40px 15px;

    .signup-slider {
      display: none;
    }

    .signup-content {
      flex-basis: clamp(600px, 80vw, 1000px);
    }
  }
`;

export const SignCard = styled.div`
  background: ${({ theme }) => (theme.dark ? theme.black900 : theme.white900)};
  transition: background ${({ theme }) => theme.transitionDuration},
    border ${({ theme }) => theme.transitionDuration};
  width: 86%;
  padding: 50px 0;
  display: flex;
  place-content: center;
  border-radius: 20px;
  border: 1px solid
    ${({ theme }) => (theme.dark ? theme.gray700 : 'transparent')};

  .wrapper {
    width: 81%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      width: 100%;
    }

    h1 {
      transition: color ${({ theme }) => theme.transitionDuration};
      color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
      font-family: inherit;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 45px;
      text-align: center;
    }

    .social-sign {
      margin-bottom: 42px;
    }

    .divider {
      position: relative;
      margin-bottom: 40px;

      .text {
        background: ${({ theme }) =>
          theme.dark ? theme.black900 : theme.white900};
        transition: ${({ theme }) => theme.transitionDuration};
        color: ${({ theme }) => (theme.dark ? theme.gray700 : theme.black700)};
        position: absolute;
        width: 45px;
        font-family: inherit;
        font-size: 18px;
        font-weight: 600;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        text-transform: uppercase;
      }

      hr {
        transition: ${({ theme }) => theme.transitionDuration};
        border-color: ${({ theme }) =>
          theme.dark ? theme.gray700 : theme.black700};
        background: ${({ theme }) =>
          theme.dark ? theme.gray700 : theme.black700};
      }
    }

    .signup-form {
      margin-bottom: 60px;
      display: flex;
      flex-direction: column;
      gap: 18px;

      .input-group {
        display: flex;
        justify-content: space-between;
        gap: 15px;

        & > * {
          flex: 1 1 50%;
        }

        @media (max-width: 450px) {
          flex-direction: column;
          gap: 18px;
        }
      }

      .sign-switch {
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
      }
    }
  }

  @media (max-width: 1000px) {
    width: 100%;

    .wrapper {
      padding: 0;
    }
  }
`;
