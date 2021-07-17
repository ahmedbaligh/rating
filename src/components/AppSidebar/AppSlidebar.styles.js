import styled from 'styled-components';

export default styled.div`
  height: 100%;
  background: ${({ theme }) => (theme.dark ? theme.black700 : theme.white900)};
  display: flex;
  flex-direction: column;
  gap: 30px;

  section {
    background: ${({ theme }) => theme.gray700};

    h4 {
      padding: 10px 20px;
      background-color: blue;
      background: ${({ theme }) => theme.gray800};
      color: ${({ theme }) => theme.gray100};
    }

    .sidebar-items {
      display: flex;
      flex-direction: column;

      .sidebar-item {
        padding: 10px 25px;
        color: ${({ theme }) => theme.white900};
        font-size: 14px;
        cursor: pointer;

        &:not(:last-child) {
          border-bottom: 1px solid ${({ theme }) => theme.gray100};
        }

        &:hover {
          background: ${({ theme }) => theme.gray800};
        }
      }
    }
  }
`;
