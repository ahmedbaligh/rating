import styled, { css } from 'styled-components';

export default styled.div`
  --invalid-color: #f44;
  width: 100%;

  &::after {
    content: '';
    display: block;
    opacity: 0;
    transition: opacity 0.5s, margin 0.3s ease-out;
  }

  label {
    color: ${({ theme }) => (theme.dark ? theme.white700 : theme.gray800)};
    transition: color ${({ theme }) => theme.transitionDuration};
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    ${({ required }) =>
      required &&
      css`
        &::after {
          content: '*';
          margin-inline-start: 5px;
          color: var(--invalid-color);
        }
      `};
  }

  input {
    transition: ${({ theme }) => theme.transitionDuration};
    color: ${({ theme }) => theme.gray800};
    border: 1px solid
      ${({ theme }) => (theme.dark ? theme.gray700 : theme.gray300)};
    display: block;
    width: 100%;
    height: 45px;
    border-radius: 4px;
    padding: 14px 20px 16px;
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    text-align: start;

    &::placeholder {
      color: ${({ theme }) => theme.gray100};
    }

    &[type='email'] {
      text-align: left;

      &::placeholder {
        text-align: start;
      }
    }
  }

  &.invalid {
    &::after {
      content: attr(data-error);
      margin-top: 7px;
      font-size: 11px;
      font-weight: 400;
      color: var(--invalid-color);
      opacity: 1;
    }

    input {
      border-color: var(--invalid-color);
    }
  }
`;
