import React from 'react';

const Search = (props) => {
  return (
    <div>
       <input onChange={props.searchHandler}></input>
    </div>
  );
};

export default Search;
