import React, { Component } from "react";

class FooterEmail extends Component {
  state = {};
  render() {
    return (
      <div className="flex flex-col justify-end text-text w-24 bottom-0 fixed right-0">
        <p className="font-mono text-darktext rotate-90 h-max my-12 p-auto">
          <a className="" href="PLACEHOLDER">
            mrbaez427@gmail.com
          </a>
        </p>

        <hr className="w-px h-32 mx-auto mt-24 bg-darktext"></hr>
      </div>
    );
  }
}

export default FooterEmail;
