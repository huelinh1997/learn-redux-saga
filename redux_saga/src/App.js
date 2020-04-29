import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const App = props => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="#home" className="navbar-brand">
        React-Bootstrap
      </a>
      <button
        aria-controls="responsive-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar-collapse collapse show"
        id="responsive-navbar-nav"
        >
        <div className="mr-auto navbar-nav">
          <div className="dropdown nav-item">
            <a
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
              className="dropdown-toggle nav-link"
              role="button">
              Dropdown
            </a>
          </div>
          <div className="dropdown nav-item">
            <a
              aria-haspopup="true"
              aria-expanded="false"
              href="#"
              className="dropdown-toggle nav-link"
              role="button">
              Dropdown
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default App;
