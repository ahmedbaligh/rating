import styled from 'styled-components';

const ScraperPage = styled.div`
  position: relative;
  display: flex;
  gap: 54px;
  width: 100%;
  min-width: 0;
  padding-inline: 36px;
  padding-block: 90px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  transition: background 0.5s;
  h1 {
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.gray800)};
    transition: color 0.5s;
  }
  form {
    display: grid;
    width: 600px;
    max-width: 100%;
    height: fit-content;
    padding: 54px;
    grid-template-columns: minmax(90px, 1fr) minmax(90px, 1fr);
    column-gap: 18px;
    row-gap: 36px;
    background-color: ${({ theme }) =>
      theme.dark ? theme.black900 : theme.white900};
    transition: background 0.5s;
    border-radius: 10px;
    align-items: end;
    box-shadow: 0px 4px 10px
      ${({ theme }) =>
        theme.dark ? `${theme.white900}55` : `${theme.black900}55`};

    .ui.inline.dropdown {
      width: 100%;
      height: 45px;
      border: 1px solid
        ${({ theme }) => (theme.dark ? theme.gray700 : theme.gray300)};
      border-radius: 4px;

      background-color: ${({ theme }) => theme.white900};
      display: flex;
      align-items: center;
      justify-content: center;
      .dropdown.icon,
      .text {
        color: ${({ theme }) => theme.gray800};
      }
      .visible.menu {
        top: 120%;
        width: 100%;
      }
    }

    .labeled-dropdown {
      label {
        color: ${({ theme }) => (theme.dark ? theme.white700 : theme.gray800)};
        transition: color ${({ theme }) => theme.transitionDuration};
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;

        &::after {
          content: '*';
          margin-inline-start: 5px;
          color: #f44;
        }
      }
    }

    button {
      grid-column: 1 / 3;
      width: 90%;
      justify-self: center;
      height: 45px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.blue800};
      color: ${({ theme }) => theme.white900};
    }
  }
  p {
    width: fit-content;
    height: fit-content;
    padding: 9px 18px;
    border-radius: 18px;
    margin: 0 36px;
    border-start-start-radius: 0;
    background-color: ${({ theme }) => theme.white900};
    color: ${({ theme }) => theme.gray800};
    box-shadow: 0px 4px 10px
      ${({ theme }) =>
        theme.dark ? `${theme.white900}55` : `${theme.black900}55`};
  }
`;

export default ScraperPage;
