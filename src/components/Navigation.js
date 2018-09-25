import React from "react";

const Navigation = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <p>Socko<span>admin</span></p>
        </div>
        <div className="nav__icons">
          <div className="nav__icons--search" />
          <div className="nav__icons--mail" />
          <div className="nav__icons--person" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
