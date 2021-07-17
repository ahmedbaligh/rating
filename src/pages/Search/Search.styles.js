import styled from 'styled-components';

export default styled.main`
  display: flex;
  padding: 72px 0;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  .ui.rating {
    .icon {
      width: fit-content;
      font-size: 1.3rem;
      color: ${({ theme }) => theme.gray100};
      &.active {
        color: #fabc2e;
      }
    }
  }

  .filters-container {
    display: flex;
    flex-direction: column;
    gap: 54px;
    padding-inline-start: 54px;
    padding-inline-end: 18px;
    width: 300px;
    height: fit-content;
    border-inline-end: 1px solid ${({ theme }) => theme.gray100};
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.gray800)};

    .filters {
      display: flex;
      flex-direction: column;
      gap: 36px;
      width: 100%;
    }
    .filter {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 18px;

      .values {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding-inline-start: 18px;
        list-style: none;

        label {
          color: inherit;
        }
        li {
          cursor: pointer;

          &.active {
            padding-inline-start: 9px;
            color: ${({ theme }) => theme.blue500};
          }
        }

        .clear-btn {
          width: fit-content;
          background-color: transparent;
          color: ${({ theme }) => theme.blue500};
          align-self: flex-end;
        }
      }
    }
  }

  .result-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 108px;
    align-items: center;
    padding: 0 36px;

    .card-list {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      max-width: 1680px;

      .result-header {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        color: ${({ theme }) => (theme.dark ? theme.white900 : theme.gray800)};

        .result-sort {
          display: flex;
          align-items: center;
          gap: 9px;

          .ui.inline.dropdown {
            display: flex;
            width: fit-content;
            align-items: center;
            .dropdown.icon,
            .text {
              color: ${({ theme }) => theme.gray700};
            }
            .text {
              max-width: 90px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }

        span {
          font-weight: 400;
        }
      }
    }
  }
`;
