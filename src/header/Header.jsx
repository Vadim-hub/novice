import React from "react";
import "./header-style.css";

function Header() {
  return (
    <header className="App-header">
      <span className="App-logo">joindoit</span>
      <section className="Header-items">
        <span>Home</span>
        <span>Sign in</span>
        <span
        /* className="App-link" href="https://reactjs.org" */
        >
          Sigh up
        </span>
      </section>
    </header>
  );
}

export default Header;
