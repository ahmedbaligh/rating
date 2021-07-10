import styled, { css } from 'styled-components';

//Hero start
export const MainInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 54px;
  height: 100%;
  flex: 1;
  padding-inline-end: 36px;
`;
export const ImgGallary = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 36px;
  height: 100%;
  padding: 36px 0;
  padding-inline-end: 90px;
  padding-inline-start: 108px;
  border-start-start-radius: 480px;
  border-end-start-radius: 480px;
  background-color: ${({ theme }) => theme.blue500};
  flex: 1;
  .img-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 360px;
    width: 100%;
    img {
      max-width: 100%;
      max-height: 100%;
      height: auto;
      width: auto;
      mix-blend-mode: darken;
    }
  }
  .img-picker {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    button {
      background-color: transparent;
      border: 0;
      outline: none;
      width: fit-content;
      height: fit-content;
      font-size: 48px;
      font-weight: 700;
      color: ${({ theme }) => (theme.dark ? theme.gray100 : theme.blue700)};
      &:first-child {
        color: ${({ theme }) => (theme.dark ? theme.white900 : theme.blue300)};
      }
    }
  }
`;
export const CategoryTree = styled.section`
  display: flex;
  gap: 9px;
  a {
    font-size: 1rem;
    font-weight: 400;
    text-decoration: underline;
    color: ${({ theme }) => (theme.dark ? theme.gray100 : theme.white900)};
    transition: color 0.5s;
    &:last-child {
      color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
    }
  }
`;
export const ProductName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 160%;
  color: ${({ theme }) => theme.white900};
`;
export const DetailsBtn = styled.button`
  outline: none;
  border: 0;
  border-bottom: 2px solid;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  padding-block-end: 5px;
  font-weight: 700;
  color: ${({ theme }) => theme.white900};
`;
export const RatingSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  span {
    color: ${({ theme }) => theme.blue400};
    font-weight: 400;
    white-space: nowrap;
    &:first-child {
      color: ${({ theme }) => theme.white900};
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .ui.rating {
    width: fit-content;
    .icon {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.gray100};
      &.active {
        color: #fabc2e;
      }
    }
  }
`;
export const BuyInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  span {
    color: ${({ theme }) => theme.white900};
    font-size: 1.5rem;
    font-weight: 600;
  }
  button {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 9px;
    background-color: ${({ theme }) => theme.white900};
    color: ${({ theme }) => theme.black900};
    font-weight: 700;
    outline: none;
    border: 0;
    height: fit-content;
    width: fit-content;
    padding: 15px 30px;
    text-align: center;
    border-radius: 2rem;
    span {
      font-size: 1rem;
      font-weight: 700;
      background: linear-gradient(
        ${({ theme }) => `${theme.blue500}, ${theme.blue800}`}
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
export const Feedback = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  height: fit-content;
  button {
    outline: none;
    border: 0;
    background-color: transparent;
    height: fit-content;
    width: fit-content;
    color: ${({ theme }) => (theme.dark ? theme.gray100 : theme.blue400)};
  }
`;
export const PageHero = styled.section`
  display: flex;
  gap: 18px;
  padding-inline-start: 108px;
  padding-block-start: 18px;
  padding-block-end: 72px;
  padding-inline-end: 0;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.blue500};
  transition: background 0.5s;

  @media only screen and (max-width: 1080px) {
    ${ImgGallary} {
      padding-inline-end: 54px;
    }
  }

  @media only screen and (max-width: 820px) {
    padding-inline-start: 54px;

    ${ProductName} {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    ${ImgGallary} {
      align-self: flex-end;
    }
    ${MainInfo} {
      padding-inline-end: 54px;
    }
  }
  @media only screen and (max-width: 430px) {
    padding-inline-start: 36px;
    ${ImgGallary} {
      padding-block: 18px;
    }
    ${MainInfo} {
      padding-inline-end: 36px;
    }
    ${RatingSection} {
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
`;

//Hero end

//Details start
export const Details = styled.section`
  color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 54px;
  padding-inline: 108px;
  padding-block: 54px;
  h2 {
    font-size: 1.25rem;
    font-weight: 700;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    width: 640px;
    max-width: 100%;
  }
  table {
    td {
      border: 0;
      font-size: 1rem;
      font-weight: 400;
      padding-inline-start: 108px;
      text-align: start;
    }
    th {
      text-align: start;
      border: 0;
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 820px) {
    padding-inline: 54px;
  }

  @media only screen and (max-width: 750px) {
    table {
      td {
        padding-inline-start: 72px;
        padding-block-start: 9px;
      }

      th {
        padding-block-start: 9px;
      }
    }
  }

  @media only screen and (max-width: 430px) {
    padding-inline: 36px;
  }
`;
//Details end

//Other sellers start
export const OtherSellers = styled.section`
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  gap: 90px;
  align-items: center;
  width: 100%;
  padding-inline: 108px;
  padding-block: 90px;
  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.gray800)};
  }
  .cards-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 1080px;
    max-width: 100%;
  }
  button {
    text-align: center;
    padding: 15px 27px;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 600;
    ${({ theme }) =>
      theme.dark
        ? css`
            color: ${({ theme }) => theme.gray100};
            border: 0;
          `
        : css`
            color: ${({ theme }) => theme.gray800};
            border: 1px solid ${({ theme }) => theme.blue700};
            border-radius: 36px;
          `}
  }

  @media only screen and (max-width: 820px) {
    padding-inline: 54px;
  }

  @media only screen and (max-width: 430px) {
    padding-inline: 36px;
  }
`;
export const SellerCard = styled.div`
  position: relative;
  z-index: 3;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.blue400};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  height: 360px;
  width: 300px;
  max-width: 100%;
  color: ${({ theme }) => (theme.dark ? theme.white900 : theme.gray700)};
  font-weight: 400;
  border-radius: 10px;
  a {
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black700)};
    font-weight: 700;
  }
  img {
    max-width: 100%;
    max-height: 64px;
    height: auto;
    width: auto;
  }
  ${({ theme }) =>
    theme.dark
      ? css`
          &:after {
            content: '';
            position: absolute;
            inset-inline-start: -1px;
            inset-block-start: -1px;
            width: 100%;
            height: 100%;
            box-sizing: content-box;
            padding-inline-end: 2px;
            padding-block-end: 2px;
            z-index: -2;
            border-radius: inherit;
            background-image: linear-gradient(
              to top right,
              ${({ theme }) => `${theme.white900}, ${theme.black900}`}
            );
          }
          &:before {
            content: '';
            border-radius: inherit;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background-color: ${({ theme }) => theme.black900};
          }
        `
      : ''}
`;
//Other sellers end

//Reviews start

export const Reviews = styled.section`
  display: flex;
  flex-direction: column;
  padding: 36px 108px;
  gap: 54px;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  color: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
  transition: all 0.5s;
  h2 {
    font-style: 2rem;
    font-weight: 700;
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.gray800)};
  }
  .controller {
    display: flex;
    align-items: center;
    gap: 72px;
    button {
      border: 0;
      outline: none;
      background-color: transparent;
      font-weight: 600;
      color: ${({ theme }) => (theme.dark ? theme.gray100 : theme.black900)};
      &:disabled {
        color: ${({ theme }) => (theme.dark ? theme.gray800 : theme.gray700)};
      }
    }
  }

  @media only screen and (max-width: 820px) {
    padding-inline: 54px;
  }

  @media only screen and (max-width: 430px) {
    padding-inline: 36px;
    .controller {
      gap: 42px;
    }
  }
`;
export const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  .review-header {
    display: flex;
    gap: 18px;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    .name {
      font-weight: 600;
    }
    .ui.rating {
      width: fit-content;
      .icon {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.gray100};
        &.active {
          color: #fabc2e;
        }
      }
    }
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`;
