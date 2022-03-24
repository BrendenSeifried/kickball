import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink exact to = '/teams'>
        <h3>Teams</h3>
      </NavLink>
    </div>
  );
}
