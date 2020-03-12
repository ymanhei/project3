import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="/">
      WDMD (Welltop Data Management Dashboard)
      </a>
      <a className="float-right" href="/">Logout</a>
    </nav>
  );
}

export default Nav;
