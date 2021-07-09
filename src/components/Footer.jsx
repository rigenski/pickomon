import React from "react";

function Footer(props) {
  return (
    <footer className="bg-transprant mt-8">
      <nav className="text-center p-8 ">
        <h4 className="text-gray-700 font-medium">
          Show project on{" "}
          <a href="https://github.com/rygenzx/pickomon" id="icon-github">
            <i className="fab fa-github"></i>{" "}
            <span className="font-bold">Github</span>
          </a>
        </h4>
        <h4 className="text-gray-700 font-medium mt-1">
          Made with <i className="fas fa-coffee" id="icon-coffe"></i> by{" "}
          <a
            className="font-bold"
            href="http://rygenzx.github.io"
            id="name-footer"
          >
            Rigen Maulana
          </a>
        </h4>
      </nav>
    </footer>
  );
}

export default Footer;
