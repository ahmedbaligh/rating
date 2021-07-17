import React, { useState, useRef } from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import SearchInput from './SearchBar.styles';
import { useUpdate } from '../../hooks';
import { getSearchSuggestions } from '../../utils/api';

const SearchBar = ({
  placeholder,
  transparent,
  language,
  display,
  fluid,
  externalfocus
}) => {
  const history = useHistory();

  const [suggestions, setSuggestions] = useState([]);

  const searchBarRef = useRef();
  const searchInputRef = useRef();

  useUpdate(() => {
    searchBarRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    searchInputRef.current.focus();
  }, [externalfocus]);

  const activateSearchBar = () => {
    searchBarRef.current.classList.toggle('active');
    searchBarRef.current.classList.contains('active') &&
      searchInputRef.current.focus();
  };

  const getSuggestions = async (keyword, max = 7) => {
    let results;

    if (keyword) {
      try {
        const { data } = await getSearchSuggestions(keyword);

        results = [...new Set(data.result.slice(0, max))];
      } catch (error) {
        results = ['An error occurred. No results found.'];
      }
    } else results = [];

    setSuggestions(results);
  };

  return (
    <div ref={searchBarRef} className="search-bar">
      <SearchInput
        placeholder={placeholder}
        language={language}
        display={display}
        transparent={transparent}
        fluid={fluid}
        onChange={e => getSuggestions(e.target.value)}
      >
        <Icon name="search" onClick={activateSearchBar} />
        <input ref={searchInputRef} />
      </SearchInput>

      <Segment.Group>
        {suggestions.map(suggestion => (
          <Segment
            key={suggestion}
            className="suggestion"
            onClick={() => history.push(`/search/${suggestion}`)}
          >
            {suggestion}
          </Segment>
        ))}
      </Segment.Group>
    </div>
  );
};

export default SearchBar;
