import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const routes = [
  ["About", "/pathLink#about"],
  ["Experience", "/pathLink#experience"],
  ["Projects", "/pathLink#projects"],
  ["Resume", "/pathLink#resume"],
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
      <a href="/#">
        <img
          className="w-max h-max ml-4 animate-fade-in-down1"
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="IMG NOT FOUND"
        ></img>
      </a>
      <header className="flex justify-end font-mono text-md my-auto">
        {/* {[
          ["About", "/#about"],
          ["Experience", "/#experience"],
          ["Projects", "/#projects"],
        ].map(([title, route], i) => (
          <a
            href={route}
            key={i}
            className={`m-4 animate-fade-in-down${i + 1}`}
          >
            <span className="m-2 text-pink-500 font-bold">0{i + 1}.</span>
            {title}
          </a>
        ))} */}
        <a href="/#about" className="m-4 animate-fade-in-down1">
          <span className="m-2 text-pink-500 font-bold">01.</span>
          About
        </a>
        <a href="/#experience" className="m-4 animate-fade-in-down2">
          <span className="m-2 text-pink-500 font-bold">02.</span>
          Experience
        </a>
        <a href="/#projects" className="m-4 animate-fade-in-down3">
          <span className="m-2 text-pink-500 font-bold">03.</span>
          Projects
        </a>
        <a
          href="./Michael-Baez-Resume23.pdf"
          className="px-2 m-4 font-bold border text-pink-500 border-pink-500 rounded hover:bg-pink-500 hover:bg-opacity-20 animate-fade-in-down5 duration-300"
        >
          Resume
        </a>
      </header>
    </div>
  );
}

export default Navbar;
