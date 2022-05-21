import React from 'react';
import './style.css';

const SearchBar = ({value, handleSearchKey, clearSearch, formSubmit}) => (
    <div className='searchBar'>
        <form onSubmit={formSubmit}>
            <input type="text" onChange = {handleSearchKey} placeholder="Search By Category" value = {value} style={{border:'none'}} />

            {value && <span onClick = {clearSearch}>X</span>}

            <button>Go</button>
        </form>
    </div>
);

export default SearchBar