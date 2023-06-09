import React from 'react'

function Search({search, handleSearch}) {
  return (
    <div className='search-container'>
        <input
        className='search-input'
        type='text'
        placeholder='Search'
        value={search}
        id='search'
        onChange={(e) => handleSearch(e)}
        />       
      
    </div>
  )
}

export default Search
