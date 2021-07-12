import styled from 'styled-components';

export default styled.button`
  background: ${({ theme }) => theme.white900};
  width: clamp(160px, 64%, 300px);
  font-family: inherit;
  font-size: clamp(1.1rem, 1.3vw, 26px);
  font-weight: 600;
  line-height: 3.35;
  border-radius: 50px;
  transition: color ${({ theme }) => theme.transitionDuration};

  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.blue700};
  }
`;
