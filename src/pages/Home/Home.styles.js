import styled, { css } from 'styled-components';

import SearchInput from '../../components/SearchBar/SearchBar.styles';

export default styled.div`
  .section {
    transition: background ${({ theme }) => theme.transitionDuration};
    border-bottom: 1px solid
      ${({ theme }) => (theme.dark ? theme.gray800 : 'transparent')};
  }

  .wrapper {
    display: flex;
  }

  .section-heading {
    transition: color ${({ theme }) => theme.transitionDuration};
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
    font: inherit;
    font-size: clamp(32px, 2.7vw, 46px);
    font-weight: 500;
  }

  .hero.section {
    background: ${({ theme }) => (theme.dark ? theme.black900 : theme.blue500)};
    padding: 100px 0 113px;

    .wrapper {
      justify-content: space-between;
      gap: 45px;
    }

    .brand {
      width: max(370px, 30%);
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 30px;

      .brand-texts {
        color: ${({ theme }) => theme.white900};

        .brand-text {
          font-size: clamp(28px, 3.36vw, 56px);
          font-weight: 600;
          line-height: 1.15;

          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }

      .main-action {
        font-weight: 700;
      }
    }

    .hero-illustration {
      transform: rotateY(
        ${({ language }) => (language === 'ar' ? '180deg' : '0deg')}
      );
      width: 68%;
      min-width: 400px;
    }

    @media (max-width: 699px) {
      padding: 70px 0;

      .brand {
        width: 100%;
        align-items: center;
        text-align: center;
        gap: 60px;

        .brand-texts {
          .brand-text {
            font-size: 250%;
            /* font-size: 3rem; */

            &:not(:last-child) {
              margin-bottom: 30px;
            }
          }
        }

        .main-action {
          font-size: 115%;
          width: min(250px, 70%);
        }
      }

      .hero-illustration {
        display: none;
      }
    }
  }

  .search.section {
    align-items: center;
    background: ${({ theme }) =>
      theme.dark ? theme.black900 : theme.yellow100};
    padding: 90px 0 58px;

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 52px;
    }

    .section-heading {
      text-align: center;
    }

    .search-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 36px;

      .search-bar {
        width: clamp(250px, 78%, 1000px);
        position: relative;

        ${SearchInput} {
          background: ${({ theme }) => theme.white900};
          border: 1px solid ${({ theme }) => theme.gray500};
          border-radius: 50px;
          overflow: hidden;
          align-items: center;
          gap: 15px;
          flex-direction: row-reverse;
          padding: 15px 3.5rem;

          &:focus-within {
            border-color: ${({ theme }) => theme.blue700};

            .search.icon {
              color: ${({ theme }) => theme.blue700};
            }
          }

          .search.icon {
            margin-inline-end: 0px;
            color: ${({ theme }) => theme.gray600};
          }

          input[type='text'][placeholder] {
            border: 0;
            color: ${({ theme }) => theme.gray800} !important;
            font: inherit;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.6;
            padding: 0 !important;

            &::placeholder {
              color: ${({ theme }) =>
                theme.dark ? theme.gray200 : theme.gray500};
            }
          }
        }

        .ui.segments {
          top: 110%;
          border-radius: 20px;

          .ui.segment.suggestion {
            padding: 20px 0;
            padding-inline-start: 2.7rem;
          }
        }

        @media (max-width: 767px) {
          width: 100%;

          ${SearchInput} {
            padding-left: 30px;
            padding-right: 30px;

            input[type='text'][placeholder] {
              font-size: inherit;
            }
          }
        }
      }

      .search-main {
        border: 1px solid ${({ theme }) => theme.gray600};
      }
    }
  }

  .categories.section {
    background: ${({ theme }) => (theme.dark ? theme.black900 : theme.blue200)};
    display: grid;
    grid-template-columns: 1.1fr repeat(2, 1fr);

    .category {
      transition: background ${({ theme }) => theme.transitionDuration};
      display: flex;
      flex-direction: column;
      gap: 30px;
      cursor: pointer;
      ${({ theme }) =>
        theme.dark &&
        css`
          background-color: ${theme.black900} !important;
        `};

      .category-header {
        text-align: start;
        margin-top: 55px;
        margin-inline-start: 11%;

        .category-name {
          font-family: inherit;
          font-weight: 500;
          font-size: clamp(22px, 1.8vw, 32px);
          color: ${({ theme }) =>
            theme.dark ? theme.white900 : theme.black900};
          transition: color ${({ theme }) => theme.transitionDuration};
          margin-bottom: 14px;
        }

        .products-count {
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          color: ${({ theme }) => (theme.dark ? theme.gray700 : theme.gray500)};
        }
      }

      .category-illustration {
        ${({ language }) =>
          language === 'ar' &&
          css`
            transform: rotateY(180deg);
          `}
        transition: transform ${({ theme }) => theme.transitionDuration}
          ease-out;
        align-self: flex-end;
        width: clamp(150px, 65%, 400px);
        margin-inline-end: 1rem;
        margin-bottom: 20px;
      }

      &:hover .category-illustration {
        transform: scale(1.1);
        ${({ language }) =>
          language === 'ar' &&
          css`
            transform: rotateY(180deg) scale(1.1);
          `}
      }

      &:nth-child(1) {
        grid-row: 1/3;
        background: ${({ theme }) => theme.blue300};

        .category-header {
          .category-name {
            font-size: clamp(32px, 2.6vw, 44px);
            margin-bottom: 11px;
          }

          .products-count {
            font-size: 14px;
          }
        }

        .category-illustration {
          align-self: initial;
          width: min(85%, 416px);
          margin-top: 74px;
          margin-inline-start: -30px;

          img {
            transform: rotate(33deg);
          }
        }
      }

      &:nth-child(2),
      &:nth-child(5) {
        background: ${({ theme }) => theme.blue100};
      }

      &:nth-child(3),
      &:nth-child(4) {
        background: ${({ theme }) => theme.blue200};
      }

      &:nth-child(2) {
        border: 1px solid
          ${({ theme }) => (theme.dark ? theme.gray800 : 'transparent')};
        border-top-color: transparent;

        .category-illustration {
          width: clamp(150px, 50%, 400px);
        }
      }

      &:nth-child(3) {
        border-bottom: 1px solid
          ${({ theme }) => (theme.dark ? theme.gray800 : 'transparent')};
      }

      &:nth-child(4) {
        border-inline: 1px solid
          ${({ theme }) => (theme.dark ? theme.gray800 : 'transparent')};

        .category-illustration {
          width: clamp(150, 514405%, 400px);
        }
      }
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;

      .category {
        align-items: center;

        .category-header {
          text-align: center;
          margin-top: 30px;
          margin-inline-start: 0;

          .category-name {
            font-size: 26px;
          }

          .products-count {
            font-size: 14px;
          }
        }

        .category-illustration {
          align-self: inherit;
          margin-inline-end: 0;
          margin-bottom: 30px;
        }

        &:nth-child(1) {
          grid-row: initial;

          .category-header {
            .category-name {
              font-size: 34px;
            }
          }

          .category-illustration {
            align-self: flex-start;
            width: clamp(250px, 75%, 400px);
            margin: 40px 0 max(10%, 40px);
          }
        }

        &:not(:last-child) {
          border: 0;
          border-bottom: 1px solid
            ${({ theme }) => (theme.dark ? theme.gray800 : 'transparent')};
        }
      }
    }
  }

  .newsletter.section {
    background: ${({ theme }) => (theme.dark ? theme.black900 : theme.pink100)};
    padding: 100px 0;

    .wrapper {
      width: 93%;
      justify-content: space-between;
      align-items: center;
      gap: 60px;
    }

    .newsletter-illustration {
      flex-basis: 51%;
    }

    .newsletter-content {
      flex-basis: 45%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .section-heading {
        font-size: clamp(28px, 2.5vw, 44px);
        margin-bottom: 37px;
      }

      .section-description {
        width: 85%;
        color: ${({ theme }) => (theme.dark ? theme.pink400 : theme.pink600)};
        font-size: clamp(1rem, 1.39vw, 28px);
        font-weight: 500;
        line-height: 1.8;
        margin-bottom: 10px;
      }

      input[type='email'] {
        width: clamp(250px, 57%, 400px);
        font-family: inherit;
        font-size: clamp(12px, 1.1vw, 24px);
        line-height: 1.8;
        font-weight: 500;
        color: ${({ theme }) => (theme.dark ? theme.pink500 : theme.pink300)};
        border-radius: 0;
        border-bottom: 2px solid
          ${({ theme }) => (theme.dark ? theme.pink500 : theme.pink300)};
        background-color: transparent;
        padding: 8px;
        margin-bottom: 58px;

        &::placeholder {
          color: ${({ theme }) => (theme.dark ? theme.pink400 : theme.pink200)};
        }
      }

      .subscribe {
        font-weight: 700;
        width: clamp(160px, 38%, 300px);
      }
    }

    @media (max-width: 767px) {
      padding: 70px 0;

      .newsletter-content {
        flex-basis: 100%;
        align-items: center;
        text-align: center;

        .section-heading {
          font-size: clamp(28px, 2.5vw, 44px);
          margin-bottom: 37px;
        }

        .section-description {
          width: 85%;
          color: ${({ theme }) => (theme.dark ? theme.pink400 : theme.pink600)};
          font-size: clamp(1rem, 1.39vw, 28px);
          font-weight: 500;
          line-height: 1.8;
          margin-bottom: 10px;
        }

        input[type='email'] {
          text-align: center;
        }

        .subscribe {
          font-size: 90%;
          width: min(250px, 70%);
        }
      }

      .newsletter-illustration {
        display: none;
      }
    }
  }
`;
