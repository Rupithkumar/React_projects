import React from 'react';
import { Link } from 'react-router-dom';

export const Menubar = () => {
  return (
    <div>
      <ul className='menubar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
};
export default Menubar;
