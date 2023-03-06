import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const handleLogout = () => {
    logout();
  };

  return (
   <>
    <nav className="navbar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
    {user && (
        <div className="logout">
          <p>{user}</p>
          {<button onClick={handleLogout}>Logout</button>}
        </div>
      )}
   </>
  );
};
export default Navbar;