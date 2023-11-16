import React from 'react';
import { SearchContainer, SearchInput } from '../styled/SearchInput';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <SearchContainer className="Search">
      <SearchInput
        placeholder="Type to search ..."
        type="text"
        className="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </SearchContainer>
  );
};

export default Search;
