import styled from 'styled-components';

export default styled.aside`
  display: flex;
  flex-direction: column;
  padding: 36px;
  padding-inline-end: 0;
  height: 100%;
  width: 240px;
  flex-shrink: 0;
  gap: 54px;
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.blue500};
  transition: background ${({ theme }) => theme.transitionDuration};
  border-inline-end: ${({ theme }) =>
    theme.dark ? `1px solid ${theme.gray100}` : ''};
  .tabs {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 27px;
  }
  .tab {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px;
    padding-inline-start: 27px;
    color: ${({ theme }) => theme.white900};
    border-start-start-radius: 30px;
    border-end-start-radius: 30px;
    background-color: inherit;
    img {
      width: 36px;
      filter: invert(89%) sepia(0%) saturate(7452%) hue-rotate(55deg)
        brightness(110%) contrast(106%);
    }
    &.active {
      background-color: ${({ theme }) => theme.white900};
      color: ${({ theme }) => theme.blue500};
      img {
        filter: invert(96%) sepia(3%) saturate(6270%) hue-rotate(166deg)
          brightness(88%) contrast(85%);
      }
    }
  }
`;
