import React, { useEffect, useState } from "react";

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
      <header className="hidden sm:flex justify-end font-mono text-md my-auto">
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
          className="px-2 m-4 mr-6 font-bold border text-pink-500 border-pink-500 rounded hover:bg-pink-500 hover:bg-opacity-20 animate-fade-in-down5 duration-300"
        >
          Resume
        </a>
      </header>
      <svg
        className="sm:hidden h-12 w-12 mr-7 my-auto"
        // width="800px"
        // height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-pink-500"
          d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
}

export default Navbar;
