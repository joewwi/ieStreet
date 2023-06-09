import React from 'react'

function Search({search, handleSearch}) {
  return (
    <div className='search-container'>
        <input
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => handleSearch(e)}
        />       
      
    </div>
  )
}

export default Search
