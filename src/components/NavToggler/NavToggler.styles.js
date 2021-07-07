import styled, { css } from 'styled-components';

export default styled.div`
  width: 19px;
  height: 15px;
  cursor: pointer;

  hr {
    transition: all 0.3s ease;
    border: 0;
    background-color: ${({ theme }) => theme.white900};
    height: 2px;

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  /* Toggle between hamburger and close icon if Toggler is closable */
  ${({ closable }) =>
    closable &&
    css`
      &.open {
        hr {
          transition: 0.3s;

          &:nth-child(1) {
            transform: rotate(-45deg);
            margin-bottom: -8px;
            margin-top: 6px;
          }

          &:nth-child(2) {
            opacity: 0;
            transition: 0.5s;
          }

          &:nth-child(3) {
            transform: rotate(45deg);
          }
        }
      }
    `}
`;
