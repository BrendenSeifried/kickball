import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      
      <NavLink className='links' exact to = '/'>
        <h1>Home</h1>
      </NavLink>

      <NavLink className='links' exact to = '/teams'>
        <h1>Teams</h1>
      </NavLink>

      <NavLink className='links' exact to = '/players'>
        <h1>Players</h1>
      </NavLink>

     
    </div>
  );
}
