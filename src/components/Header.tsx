import React from "react";
import Dropdown from "./dropdown";

function Header() {
  return (
    <header className="mx-4 px-2 pt-4 pb-2 border-b-2  flex justify-between items-center">
      <div className="flex items-center">
        <img src="icon.png" alt="" className="w-12" />
        <h1 className="text-2xl font-playwrite ">Caracol Planet</h1>
      </div>

      <Dropdown />
    </header>
  );
}

export default Header;
