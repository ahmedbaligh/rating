import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 90px 18px;
  gap: 36px;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};

  .roles-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1080px;
    color: ${({ theme }) => (theme.dark ? theme.white900 : theme.blue800)};

    button {
      background-color: ${({ theme }) =>
        theme.dark ? theme.white900 : theme.blue800};
      color: ${({ theme }) => (theme.dark ? theme.blue800 : theme.white900)};
      font-size: 15px;
      padding: 5px 18px;
      border-radius: 25px;
    }
  }
  table {
    width: 100%;
    max-width: 1080px;
    border: 1px solid ${({ theme }) => theme.gray100};
    text-align: inline-start;
    font-size: 14px;
    border-radius: 10px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.blue800};
    td,
    th {
      max-width: 90px;

      &:last-child {
        max-width: 54px;
      }
    }
    thead {
      background-color: ${({ theme }) => theme.blue200};

      th {
        padding: 18px;
        padding-inline-start: 0;
        &:first-child {
          padding-inline-start: 18px;
          max-width: 108px;
        }
      }
    }
    tbody {
      td {
        padding: 27px 18px;
        padding-inline-start: 0;
        &:first-child {
          padding-inline-start: 18px;
          max-width: 108px;
        }

        button {
          display: flex;
          background-color: transparent;
          color: inherit;
          font-weight: inherit;
          align-items: center;
          width: 100%;
          gap: 9px;

          img {
            width: 18px;
            min-width: 18px;
            filter: invert(13%) sepia(12%) saturate(4782%) hue-rotate(155deg)
              brightness(96%) contrast(97%);
          }
        }
      }
      tr:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.blue100};
      }
    }
    * {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) =>
    theme.dark ? `${theme.black900}DD` : `${theme.white900}DD`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 18px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    max-width: 100%;
    gap: 24px;
    padding: 36px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({ theme }) => theme.white900};
    color: ${({ theme }) => theme.blue800};
    border: 1px solid ${({ theme }) => theme.gray100};
    border-radius: 10px;

    .btns {
      display: flex;
      gap: 18px;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      button {
        padding: 9px;
        border-radius: 5px;
        background-color: red;
        color: ${({ theme }) => theme.white900};
        &.save {
          background-color: ${({ theme }) => theme.blue800};
          color: ${({ theme }) => theme.white900};
        }
      }
    }
  }
`;
