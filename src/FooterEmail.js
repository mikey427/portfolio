import React from "react";

function FooterEmail() {
  return (
    <div className="flex flex-col justify-end text-text w-24 bottom-0 fixed right-0">
      <p className="font-mono text-darktext rotate-90 h-max my-12 p-auto hover:text-pink-500 transition ease-in-out duration-500  hover:transition hover:-translate-y-1 hover:ease-in-out hover:duration-200">
        <a className="" href="PLACEHOLDER">
          mrbaez427@gmail.com
        </a>
      </p>

      <hr className="w-px h-32 mx-auto mt-24 bg-darktext"></hr>
    </div>
  );
}

export default FooterEmail;
