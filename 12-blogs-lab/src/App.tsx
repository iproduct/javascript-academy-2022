import './App.css';

import React, { CSSProperties, Fragment } from 'react';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { HomeAside } from './HomeAside';
import { BlogsAside } from './BlogsAside';

let activeStyle: CSSProperties = {
  textDecoration: "underline"
};

interface IsActiveProps {
  isActive: boolean;
}

export const getActiveStyle: (props: IsActiveProps) => CSSProperties =
  ({ isActive }) => isActive ? activeStyle : ({} as CSSProperties)

export const getActiveClass: (props: IsActiveProps) => string = ({ isActive }) =>
            isActive ? "active" : ""
        

function App() {
  return (
    <div className="App">
      <h2>React Blogs Demo</h2>
      <nav>
        <ul>
          <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
          <li><NavLink to="/blogs" className={getActiveClass}>Blogs</NavLink></li>
          <li><NavLink to="/users" className={getActiveClass}>Users</NavLink></li>
          <li><NavLink to="/invoices" className={getActiveClass}>Invoices</NavLink></li>
          <li><NavLink to="/about" className={getActiveClass}>About</NavLink></li>
        </ul>
      </nav>
      <aside>
        <Routes>
          <Route path="/" element={<HomeAside />} />
          <Route path="/blogs" element={<BlogsAside />} />
        </Routes>
      </aside>
      <Outlet />
    </div>

  );
}

export default App;
