import React, { Component } from "react";

const routes = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
];
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src="../public/logo.png" alt="IMG NOT FOUND"></img>
        <header className="flex justify-end content-center font-mono text-md">
          {[
            ["About", "/about"],
            ["Experience", "/experience"],
            ["Projects", "/projects"],
          ].map(([title, route], i) => (
            <a href={route} key={i} className="m-4 font-bold">
              <span className="m-2 text-pink-500">0{i + 1}.</span>
              {title}
            </a>
          ))}
          <h1 className="px-2 m-4 font-bold border text-pink-500 border-pink-500 rounded">
            Resume
          </h1>
        </header>
      </div>
    );
  }
}

export default Navbar;
