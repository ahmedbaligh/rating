import styled from 'styled-components';
import SearchInput from '../SearchBar/SearchBar.styles';

export default styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84px;
  padding-inline: 40px 35px;
  background: ${({ theme }) => (theme.dark ? theme.black900 : theme.blue500)};
  transition: background ${({ theme }) => theme.transitionDuration};

  .options.group:first-child {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    flex-grow: 0.3;
  }

  .site-logo {
    color: ${({ theme }) => theme.white900};
    flex-grow: 0;
  }

  .options.group:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-basis: 35%;
    gap: 27px;

    .header-search {
      position: relative;
    }

    .icons {
      display: flex;
      align-items: center;
      gap: 27px;

      .icon {
        font-size: 22px;
        cursor: pointer;
        color: ${({ theme }) => theme.white900};
      }
    }
  }

  @media (max-width: 1000px) {
    & {
      gap: 30px;

      .options.group:first-child {
        flex-grow: 0;

        .ui.dropdown.inline {
          display: none;
        }
      }

      .site-logo {
        max-width: 80px;
      }

      .options.group:last-child {
        flex-grow: 2;
      }
    }
  }

  @media (max-width: 600px) {
    & {
      padding-inline: 25px 20px;
    }

    .options.group .header-search .search-bar {
      ${SearchInput} {
        width: auto;

        .search {
          margin-inline-end: 0;
        }

        & > input[type='text'][placeholder] {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          top: -200px;
          background-color: ${({ theme }) => theme.black700} !important;
          border-radius: 5px !important;
          height: 50px;
          padding: 10px 0 !important;
          padding-inline-start: 14px !important;
          min-width: 0;
          transition: 0.7s;
        }
      }

      &.active {
        & ${SearchInput} > input[type='text'][placeholder] {
          top: 75px;
          min-width: 80vw;
        }
      }

      & .ui.segments {
        transition: max-height 0.4s, opacity 0.7s;
        position: fixed;
        top: calc(75px + 50px);
        left: 50%;
        transform: translateX(-50%);
        width: 80vw;
        border: 0;
      }

      &:not(.active) .ui.segments {
        opacity: 0;
      }
    }
  }

  @media (max-width: 450px) {
    .options.group:last-child .icons .icon:not(.theme-toggler) {
      display: none;
    }
  }
`;
