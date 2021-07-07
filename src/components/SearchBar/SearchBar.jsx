import React, { useState, useRef } from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import { getSearchSuggestions } from '../../utils/helpers';

import SearchInput from './SearchBar.styles';

const SearchBar = ({ placeholder, transparent, language, display, fluid }) => {
  const [suggestions, setSuggestions] = useState([]);

  const ref = useRef();

  const activateMobileSearchBar = () => ref.current.classList.toggle('active');

  return (
    <>
      <SearchInput
        placeholder={placeholder}
        language={language}
        display={display}
        transparent={transparent}
        fluid={fluid}
        onChange={e => setSuggestions(getSearchSuggestions(e.target.value))}
      >
        <Icon name="search" onClick={activateMobileSearchBar} />
        <input ref={ref} />
      </SearchInput>

      <Segment.Group>
        {suggestions.map(suggestion => (
          <Segment key={suggestion} className="suggestion">
            {suggestion}
          </Segment>
        ))}
      </Segment.Group>
    </>
  );
};

export default SearchBar;
