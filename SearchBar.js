import React from 'react'
import "../styles/layout.css";
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
 <>
    <div className='searchbar'>
    <input type="text" placeholder="Search here.."/>
    </div>
    <FaSearch className='searchIcon' />
 </>
  )
}
