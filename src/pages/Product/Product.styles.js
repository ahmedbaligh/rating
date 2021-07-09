import styled from 'styled-components';

export const PageHero = styled.section`
  display: flex;
  gap: 18px;
  padding: 108px;
  padding-block-start: 18px;
  padding-inline-end: 0;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.blue500};
  transition: background 0.5s;
`;
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
