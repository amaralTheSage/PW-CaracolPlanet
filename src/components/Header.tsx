import React from "react";
import Dropdown from "./dropdown";

function Header({ caracois, onSetCaracois }) {
  return (
    <header className="mx-4 px-2 pt-4 pb-2 border-b-2  flex justify-between items-center">
      <div className="flex items-center">
        <img src="icon.png" alt="" className="w-12" />
        <h1 className="text-2xl font-playwrite ">Caracol Planet</h1>
      </div>

      <Dropdown caracois={caracois} onSetCaracois={onSetCaracois} />
    </header>
  );
}

export default Header;
