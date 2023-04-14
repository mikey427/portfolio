import React, { useEffect, useState, useRef } from "react";

const routes = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
];
function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`flex justify-between sticky top-0 bg-main shadow-2xl z-50 ${
        visible
          ? "transition ease-in-out duration-500"
          : "transition ease-in-out duration-500 -translate-y-20"
      }`}
    >
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
          <a href={route} key={i} className="m-4">
            <span className="m-2 text-pink-500 font-bold">0{i + 1}.</span>
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

export default Navbar;
