import React from "react";
import TrollFace from "../assets/trollface.png";

function NavBar() {
  return (
    <nav className="nav">
      <img className="nav--trollface" src={TrollFace} />
      <h1 className="nav--title">Meme Generator</h1>
      <h2 className="nav--course">React Course - Project 3</h2>
    </nav>
  );
}

export default NavBar;
