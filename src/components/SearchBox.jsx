import React from 'react'

const SearchBox = ({setSearchData}) => {
    const handleChange = (e) =>{
        setSearchData(e.target.value);
    }

  return (
    <div className='searchDivStyle'>
        <input type="text" id='search' name='search' placeholder='search...' onChange={(e)=>handleChange(e)}/>
    </div>
  )
}

export default SearchBox