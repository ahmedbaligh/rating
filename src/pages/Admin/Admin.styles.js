import styled from 'styled-components';

const AdminPanel = styled.main`
  display: flex;
  height: 100vh;

  @media only screen and (max-width: 860px) {
    .side-bar {
      width: 54px;
      padding-inline-start: 9px;
      align-items: center;
      .tab {
        font-size: 0;
        padding-inline-start: 0px;

        &.active {
          padding-inline-start: 9px;
        }
      }
    }
  }
`;

export default AdminPanel;
