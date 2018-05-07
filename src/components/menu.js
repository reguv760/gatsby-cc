import React from 'react';
import Link from 'gatsby-link';

const menu = () =>
(
    <div
      style={{
        background:  '#3f3f3f',
        paddingTop: '10px'
      }}
    >

      <ul
        style={{
          listStyle:'none',
          display:'flex',
          justifyContent:'space-evenly'
        }}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
)

export default menu;


