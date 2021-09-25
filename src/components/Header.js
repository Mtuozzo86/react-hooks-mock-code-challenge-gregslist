import React from "react";
import Search from "./Search";

function Header({ searchedName, searchFunc }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchedName={searchedName} searchFunc={searchFunc} />
    </header>
  );
}

export default Header;
