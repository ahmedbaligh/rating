import React from 'react';

import Selection from './Dropdown.styles';

const Dropdown = ({ options, defaultValue, onChange, size }) => (
  <Selection
    onChange={onChange}
    inline
    options={options}
    defaultValue={defaultValue}
    size={size}
  />
);

export default Dropdown;
