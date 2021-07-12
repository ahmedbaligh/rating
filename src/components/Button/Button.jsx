import React from 'react';

import StyledButton from './Button.styles';

const Button = ({ className, children, action }) => (
  <StyledButton className={className} onClick={action}>
    {children}
  </StyledButton>
);

export default Button;
