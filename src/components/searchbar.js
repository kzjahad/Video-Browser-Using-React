import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

class SearchBar extends Component {
    render() { 
        const {handleChange, searchTerm} = this.props;
        return (
            <div style={{margin : '20px', textAlign: 'center'}}>
                <input onChange={handleChange} style={{width: '75%'}}/>
                <FaSearch/>
            </div>
        );
    }
}
 
export default SearchBar;