import React from 'react'

function Header() {
  return (
    <nav>
        <div className='logo'>Student Panel</div>
        <ul>
            <li>Home</li>
            <li>How to Register?</li>
            <li>How to Vote?</li>
            <li>About Us</li>
        </ul>
        <div className='search'>
            <i className='fa fa-search'></i>
            <i className='fa fa-search'></i>
        </div>
    </nav>
  )
}

export default Header