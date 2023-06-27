import React from 'react';
    const Search = ({search, searchInput, handleSearch }) => {
return (
  
      <div className="Search">
  <input placeHolder ="Type to search ..." type="text" className="text" value={search} ref={searchInput} onChange={handleSearch}/>
</div>

  );
}

export default Search
