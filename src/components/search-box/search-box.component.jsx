import React from "react";
import './search-box.styles.css'

export const Search = ({ placeholder, handleChange }) => (
    <div>
        <input type='search' placeholder={placeholder} className="search" onChange={handleChange}/>
    </div>
)

// export default Search


