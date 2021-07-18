import React, { useRef } from 'react';

import Toggler from './NavToggler.styles';

const NavToggler = ({ closable, action }) => {
  const ref = useRef();

  const onToggle = () => {
    closable && ref.current.classList.toggle('open');

    action();
  };

  return (
    <Toggler closable={closable} onClick={onToggle} ref={ref}>
      <hr />
      <hr />
      <hr />
    </Toggler>
  );
};

export default NavToggler;
