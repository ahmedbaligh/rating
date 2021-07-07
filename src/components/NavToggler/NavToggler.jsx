import React, { useRef } from 'react';

import Toggler from './NavToggler.styles';

const NavToggler = ({ closable }) => {
  const ref = useRef();

  const onToggle = () => ref.current.classList.toggle('open');

  return (
    <Toggler closable={closable} onClick={onToggle} ref={ref}>
      <hr />
      <hr />
      <hr />
    </Toggler>
  );
};

export default NavToggler;
