import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink exact to = '/teams'>
        <h1>Teams</h1>
      </NavLink>

      {/* <NavLink>
        <h1>Players</h1>
      </NavLink> */}
    </div>
  );
}
