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
      <div className="flex justify-between shadow-lg">
        <a href="PLACEHOLDER">
          <img
            className="w-max h-max ml-4"
            src={process.env.PUBLIC_URL + "logo.png"}
            alt="IMG NOT FOUND"
          ></img>
        </a>
        <header className="flex justify-end font-mono text-md my-auto">
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
          <a
            href="PLACEHOLDER"
            className="px-2 m-4 font-bold border text-pink-500 border-pink-500 rounded hover:bg-pink-500 hover:bg-opacity-20"
          >
            Resume
          </a>
        </header>
      </div>
    );
  }
}

export default Navbar;
