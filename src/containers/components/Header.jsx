import React, { Component, Fragment } from 'react'
import logo from './../../assets/img/picko-logo.svg'

class Header extends Component {
    render() {
        return (
            <Fragment>
              <header className="bg-gray-800 mb-8">
                <nav className="flex items-center p-4 flex-wrap container mx-auto">
                  <a href="#" className="p-2 mr-4 inline-flex items-center">
                    <img src={logo} className="w-25" alt=""/>
                  </a>
                {/* <button
                className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                data-target="#navigation">
                  <i className="material-icons">menu</i>
                </button> */}
                {/* <div
                className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
                id="navigation">
                <div
                className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                <a
                href="#"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>Home</span>
                </a>
                <a
                href="#"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>About</span>
                </a>
                </div>
                </div> */}
              </nav>
            </header>
            </Fragment>
        )
    }
}

export default Header;