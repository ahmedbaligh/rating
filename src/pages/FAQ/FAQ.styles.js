import styled from 'styled-components';

export default styled.main`
  transition: background ${({ theme }) => theme.transitionDuration};
  background: ${({ theme }) => (theme.dark ? theme.black900 : theme.blue500)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 15px;

  .faq-card {
    transition: background ${({ theme }) => theme.transitionDuration},
      border ${({ theme }) => theme.transitionDuration};
    background: ${({ theme }) =>
      theme.dark ? theme.black900 : theme.white900};
    border: 1px solid
      ${({ theme }) => (theme.dark ? theme.gray700 : 'transparent')};
    width: clamp(600px, 65vw, 800px);
    padding: 50px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    gap: 25px;
    text-align: center;
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};

    h1 {
      transition: color ${({ theme }) => theme.transitionDuration};
      font: inherit;
      font-size: clamp(25px, 3.3vw, 45px);
      font-weight: 700;
      color: ${({ theme }) => (theme.dark ? theme.blue900 : theme.blue800)};
    }

    .contact-us {
      transition: color ${({ theme }) => theme.transitionDuration};
      font: inherit;
      font-size: clamp(13px, 1.4vw, 20px);
      padding: 0 15px;
      color: ${({ theme }) => (theme.dark ? theme.gray600 : theme.gray800)};
    }

    .wrapper {
      width: max(90%, 400px);
      text-align: start;
      margin-top: 40px;

      .ui.accordion {
        .title {
          transition: color ${({ theme }) => theme.transitionDuration},
            font-weight ${({ theme }) => theme.transitionDuration};
          font: inherit;
          font-weight: 600;
          color: ${({ theme }) =>
            theme.dark ? theme.white900 : theme.black900};
          user-select: none;
          padding: 1em 0;

          &:hover {
            color: ${({ theme }) => theme.blue700};
          }

          &.active {
            color: ${({ theme }) =>
              theme.dark ? theme.blue700 : theme.blue900};

            &:hover {
              color: ${({ theme }) =>
                theme.dark ? theme.blue700 : theme.blue900};
            }
          }
        }

        .content {
          transition: max-height ${({ theme }) => theme.transitionDuration},
            padding ${({ theme }) => theme.transitionDuration};
          font: inherit;
          font-size: 14px;
          font-weight: 400;
          color: ${({ theme }) => (theme.dark ? theme.gray500 : theme.gray700)};
          display: block !important;
          max-height: 0px;
          overflow: hidden;
          padding: 0 1.6em;
        }

        .active.content {
          display: block !important;
          max-height: 1000px;
          padding: 0.5em 1.6em 1em;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    padding: 40px 15px;
  }

  @media (max-width: 600px) {
    .faq-card {
      flex-basis: clamp(600px, 80vw, 1000px);

      .wrapper {
        width: 100%;
        padding-inline: 15px;
      }
    }
  }
`;
