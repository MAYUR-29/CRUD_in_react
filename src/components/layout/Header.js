import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light border-bottom border-dark border-1">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Task</span>
          <Link to={"/"} style={{textDecoration:"none"}}><span className="navbar-brand mb-0 h1">Home</span></Link>
        </div>
      </nav>
    </>
  )
}

export default Header