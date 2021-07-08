import React from "react";

function Footer(props) {
  return (
    <footer className="bg-gray-800 mt-8">
      <nav className="text-center p-4 ">
        <h4 className="text-gray-400 mt-1">
          Show project on{" "}
          <a href="https://github.com/rygenzx/pickomon" id="icon-github">
            <i className="fab fa-github"></i> Github
          </a>
        </h4>
        <h4 className="text-gray-400 mb-2 mt-1">
          Made with <i className="fas fa-coffee" id="icon-coffe"></i> by{" "}
          <a
            className="font-medium"
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
