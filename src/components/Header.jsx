import React, { Fragment } from "react";
import logo from "./../assets/img/picko-logo.svg";

function Header(props) {
  return (
    <Fragment>
      {/* <header className="bg-gray-800 mb-8">
        <nav className="flex items-center p-4 flex-wrap container mx-auto">
          <a href="#" className="p-2 mr-4 inline-flex items-center">
            <img src={logo} className="w-25" alt="" />
          </a>
        </nav>
      </header> */}
      <header>
        <nav className="bg-none shadow">
          <div className="container mx-auto py-6 md:flex md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div>
                <a
                  className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
                  href="#"
                >
                  Brand
                </a>
              </div>
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div className="md:flex items-center">
              <div className="flex flex-col md:flex-row md:mx-6">
                <a
                  className="my-1 text-gray-700 font-medium hover:text-indigo-500 md:ml-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="my-1 text-gray-700 font-medium hover:text-indigo-500 md:ml-4 md:my-0"
                  href="#"
                >
                  Favorite
                </a>
                <a
                  className="my-1 text-gray-700 font-medium hover:text-indigo-500 md:ml-4 md:my-0"
                  href="#"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
