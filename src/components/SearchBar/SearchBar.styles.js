import { Input } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

export default styled(Input)`
  &.ui.input {
    display: flex !important;
    color: ${({ theme }) => theme.white700};

    .search.icon {
      font-size: 23px;
      transform: rotate(
        ${({ language }) => (language === 'ar' ? '90deg ' : '0deg')}
      );
      position: static;
      margin-inline-end: -25px;
      height: auto;
      cursor: pointer;
    }

    & > input[type='text'][placeholder] {
      transition: width 0.5s;
      width: 114px;
      color: ${({ theme }) => theme.white900} !important;
      font: 400 15px/1.6 ${({ theme }) => theme.font.family};
      padding: 0 !important;
      padding-inline-start: 2.7em !important;
      text-align: start;

      &::placeholder {
        color: ${({ theme }) => theme.white700};
        margin-inline-start: 20px;
      }

      ${({ display }) =>
        display === 'inline' &&
        css`
          &:focus {
            width: min(250px, 30vw);
          }
        `}
    }

    & + .ui.segments {
      transition: max-height 0.4s, opacity 0.7s;
      position: absolute;
      top: 150%;
      margin: 0;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      width: 100%;
      border: 0;
      z-index: 2;

      .ui.segment.suggestion {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        color: ${({ theme }) => theme.black700};
      }
    }

    &:focus-within {
      .search {
        color: ${({ theme }) => theme.white900};
      }

      & + .ui.segments {
        max-height: 1000px;
        opacity: 100%;
      }
    }
  }
`;
