import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Sun-Geet</h2>&nbsp;by{" "}
          <a href="https://geethub.netlify.app">Geet-Hub</a>
          <div className="right menu">
            <div className="item">
              <a
                href="https://github.com/PrerakMathur20/geet-hub-community"
                className="item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="github icon"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
