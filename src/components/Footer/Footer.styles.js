import styled from 'styled-components';

export default styled.footer`
  padding: 91px 0 35px;
  transition: background-color ${({ theme }) => theme.transitionDuration};
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  border-top: 1px solid
    ${({ theme }) => (theme.dark ? theme.gray800 : 'transparent')};

  & .footer-content {
    display: flex;
    justify-content: space-between;
    gap: max(calc(15% / 2), 100px);
    width: 85%;
    min-height: 215px;

    h3 {
      font: inherit;
      font-size: 15px;
      font-weight: 700;
      transition: color ${({ theme }) => theme.transitionDuration};
      color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
      margin-bottom: 14px;
      user-select: none;
    }

    .contact-us {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;

      .follow-us {
        display: flex;
        flex-direction: column;
        gap: 13px;

        .social-media {
          display: flex;
          align-items: center;
          gap: 15px;

          .icon {
            font-size: 24px;
            transition: color ${({ theme }) => theme.transitionDuration};
            color: ${({ theme }) =>
              theme.dark ? theme.gray700 : theme.gray800};
            cursor: pointer;

            &:hover {
              filter: invert();
            }
          }
        }
      }

      .subscription {
        display: flex;
        flex-direction: column;

        .subscribe {
          position: relative;

          input {
            font-family: inherit;
            font-size: ${({ theme }) => `${theme.font.size - 2}px`};
            font-weight: 700;
            color: ${({ theme }) =>
              theme.dark ? theme.gray100 : theme.gray800};
            width: 247px;
            height: 42px;
            border-bottom: 2px solid ${({ theme }) => theme.gray700};
            border-radius: 0;
            background-color: transparent;

            &::placeholder {
              color: ${({ theme }) => theme.gray300};
            }

            &:focus + .icon {
              color: ${({ theme }) => theme.blue700};
            }
          }

          .icon {
            position: absolute;
            bottom: 9px;
            inset-inline-end: -20px;
            font-size: 23px;
            transition: color ${({ theme }) => theme.transitionDuration};
            color: ${({ theme }) => theme.gray700};
            cursor: pointer;
            transform: rotate(
              ${({ direction }) => (direction === 'ltr' ? '0deg' : '180deg')}
            );
          }
        }
      }
    }

    .nav-groups {
      display: flex;
      gap: 40px 91px;
      justify-content: space-between;

      .nav-group {
        display: flex;
        flex-direction: column;
        gap: 26px;

        .group-title {
          transition: color ${({ theme }) => theme.transitionDuration};
          color: ${({ theme }) =>
            theme.dark ? theme.white900 : theme.black900};
          font-family: inherit;
          font-size: ${({ theme }) => `${theme.font.size - 1}px`};
          font-weight: 700;
          text-transform: uppercase;
          user-select: none;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 19px;

          .link {
            font-family: inherit;
            font-size: 14px;
            font-weight: 500;
            transition: color ${({ theme }) => theme.transitionDuration};
            color: ${({ theme }) =>
              theme.dark ? theme.gray800 : theme.gray400};
            cursor: pointer;
            text-transform: uppercase;

            &:hover {
              filter: invert();
            }
          }
        }
      }
    }
  }

  .copyrights {
    transition: color ${({ theme }) => theme.transitionDuration};
    color: ${({ theme }) => (theme.dark ? theme.gray800 : theme.black900)};
    font: inherit;
    font-weight: 400;
    font-size: ${({ theme }) => `${theme.font.size - 2}px`};
    text-align: center;
    margin-top: 63px;
  }

  @media (max-width: 1100px) {
    & .footer-content {
      .contact-us {
        justify-content: space-around;
      }

      .nav-groups {
        flex-wrap: wrap;
        column-gap: 60px;
        justify-content: flex-start;

        .nav-group {
          flex: 1 1 calc(100% / 4);
        }
      }
    }
  }

  @media (max-width: 767px) {
    & .footer-content {
      padding: 0 35px;
      flex-direction: column;

      .contact-us {
        flex-flow: row wrap;
        justify-content: space-between;
        gap: 50px;
      }
    }
  }

  @media (max-width: 450px) {
    & .footer-content {
      padding: 0 15px;
      text-align: center;

      .contact-us {
        justify-content: center;
      }
    }
  }
`;
