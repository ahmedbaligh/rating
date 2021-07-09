import React, { useState, useRef } from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import { getSearchSuggestions } from '../../utils/helpers';

import SearchInput from './SearchBar.styles';

const SearchBar = ({ placeholder, transparent, language, display, fluid }) => {
  const [suggestions, setSuggestions] = useState([]);

  const searchBarRef = useRef();
  const searchInputRef = useRef();

  const activateSearchBar = () => {
    searchBarRef.current.classList.toggle('active');
    searchInputRef.current.focus();
    console.log(searchBarRef.current);
  };

  return (
    <div ref={searchBarRef} className="search-bar">
      <SearchInput
        placeholder={placeholder}
        language={language}
        display={display}
        transparent={transparent}
        fluid={fluid}
        onChange={e => setSuggestions(getSearchSuggestions(e.target.value))}
      >
        <Icon name="search" onClick={activateSearchBar} />
        <input ref={searchInputRef} />
      </SearchInput>

      <Segment.Group>
        {suggestions.map(suggestion => (
          <Segment key={suggestion} className="suggestion">
            {suggestion}
          </Segment>
        ))}
      </Segment.Group>
    </div>
  );
};

export default SearchBar;
