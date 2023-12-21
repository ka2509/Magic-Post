import React from 'react';

const AppMenu = ({ links }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      id="main-nav"
    >
      <div className="container">
        <a className="logo navbar-brand d-flex align-items-center" href="#">
          {/* Render logo content here */}
        </a>
        <button
          aria-controls="navbar4"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-bs-target="#navbar4"
          data-bs-toggle="collapse"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse bg-white" id="navbar4">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li key={link.name} className="nav-item px-lg-2">
                <a className="nav-link" href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppMenu;