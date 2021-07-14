import styled from 'styled-components';

const ErrorPage = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 90px;
  padding-block-end: 42px;
  gap: 9px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => (theme.dark ? theme.blue700 : theme.blue500)};
  background-color: ${({ theme }) =>
    theme.dark ? theme.black900 : theme.white900};
  transition: color, background 0.5s;
  img {
    width: 480px;
    height: auto;
  }
`;
export default ErrorPage;
