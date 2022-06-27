import React from "react";
import Button from "../Button/Button.jsx";

function Header() {
  return (
    <header>
      {/* <Button styles="button"></Button> */}
      <a href="/api/auth/login">Login</a>
    </header>
  );
}

export default Header;
