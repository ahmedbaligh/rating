import styled from 'styled-components';

const ScraperPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black700 : theme.blue400};

  form {
    display: grid;
    width: 600px;
    max-width: 100%;
    height: fit-content;
    grid-template-columns: minmax(90px, 1fr) minmax(90px, 1fr);
    gap: 18px;
    .ui.inline.dropdown {
      width: auto;
      max-width: 100%;
      height: fit-content;
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
      width: 60%;
      justify-self: center;
    }
  }
`;

export default ScraperPage;
