import { Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';

export default styled(Dropdown)`
  width: 60px;
  font-size: 15px;

  .text,
  .dropdown.icon {
    color: ${({ theme }) => theme.white900};
  }

  .visible.menu {
    width: ${({ size }) => (size ? size : 80)}px;
    inset-inline-start: -5px;
    top: 150%;

    .item,
    .item.active {
      text-align: start;

      & .text {
        color: ${({ theme }) => theme.black900};
      }
    }
  }
`;
