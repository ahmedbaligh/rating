import React from 'react';

import Selection from './Dropdown.styles';

const Dropdown = ({ options, value, onChange, size }) => (
  <Selection
    onChange={onChange}
    inline
    options={options}
    value={value}
    size={size}
  />
);

export default Dropdown;
