import React, { Fragment } from "react";
import logo from "./../../assets/img/picko-logo.svg";

function Header(props) {
  return (
    <Fragment>
      <header className="bg-gray-800 mb-8">
        <nav className="flex items-center p-4 flex-wrap container mx-auto">
          <a href="#" className="p-2 mr-4 inline-flex items-center">
            <img src={logo} className="w-25" alt="" />
          </a>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
