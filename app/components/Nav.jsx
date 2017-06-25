import React from 'react';

const Nav = (props) => (
  <div className="nav-container">
    <button onClick={() => props.navigateTo('/favorites')}>
      Favorites
    </button>
    <button onClick={() => props.navigateTo('/')}>
      Search
    </button>

  </div>
)

export default Nav;
