import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Task Organizer</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="task">Create Task</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
