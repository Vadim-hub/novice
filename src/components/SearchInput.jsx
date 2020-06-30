import React from 'react';

function SearchInput(){
    return(
      <div>
      <label htmlFor="title">Ввести в поиск</label>
      <input type="text" id="title" size="50" placeholder="Text input"/>
      </div>
    )
  }

export default SearchInput;