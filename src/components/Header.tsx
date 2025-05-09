import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__container container">
      <h1 className="header__title">
        <Link to={"/"}>DEMO Streaming</Link>
      </h1>
      <div className="header__nav">
        <a href="#">Log in</a>
        <a href="#" className="header__button">
          Start your free trial
        </a>
      </div>
    </div>
  </header>
);

export default Header;
