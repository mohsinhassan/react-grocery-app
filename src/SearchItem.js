import React from 'react';

const SearchItem = ({ search, searchItem}) => {
  return (
    <form className='SearchForm' onSubmit={(e) => e.preventDefault()}>
      <input id="search" type="text" placeholder="Search Item" role="searchbox" onChange={(e) => searchItem(e.target.value)}/>
    </form>
  );
};

export default SearchItem;