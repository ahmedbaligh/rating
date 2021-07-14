import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 30px;

  .stores-heading {
    transition: color ${({ theme }) => theme.transitionDuration};
    color: ${({ theme }) => (theme.dark ? theme.gray100 : theme.gray500)};
    font: inherit;
    font-weight: 400;
  }

  .logos {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    svg {
      width: 100%;

      path {
        transition: fill ${({ theme }) => theme.transitionDuration};
      }
    }

    .amazon-logo svg g path:last-child {
      fill: ${({ theme }) => (theme.dark ? theme.white900 : theme.black900)};
    }

    .jumia-logo svg path:last-child {
      fill: ${({ theme }) => (theme.dark ? theme.gray100 : theme.black900)};
    }
  }
`;
