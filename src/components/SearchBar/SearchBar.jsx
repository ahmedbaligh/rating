import React, { useState, useRef } from 'react';
import { Icon, Segment } from 'semantic-ui-react';

import SearchInput from './SearchBar.styles';
import { getSearchSuggestions } from '../../utils/helpers/helpers';
import { useUpdate } from '../../hooks';

const SearchBar = ({
  placeholder,
  transparent,
  language,
  display,
  fluid,
  externalfocus
}) => {
  const [suggestions, setSuggestions] = useState([]);

  useUpdate(() => {
    searchBarRef.current.scrollIntoView(false);
    searchInputRef.current.focus();
  }, [externalfocus]);

  const searchBarRef = useRef();
  const searchInputRef = useRef();

  const activateSearchBar = () => {
    searchBarRef.current.classList.toggle('active');
    searchBarRef.current.classList.contains('active') &&
      searchInputRef.current.focus();
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
