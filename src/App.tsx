import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SnailCard from "./components/snailCard";
import Dropdown from "./components/dropdown";

export interface SnailInterface {
  imgUrl: string;
  species: string;
  family: string;
  continent: string;
  price: number;
}
function App() {
  const snails = [
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
      species: "Helix pomatia",
      family: "Helicidae",
      continent: "Europa",
      price: 330,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
      species: "Helix pomatia",
      family: "Helicidae",
      continent: "Europa",
      price: 330,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
      species: "Helix pomatia",
      family: "Helicidae",
      continent: "Europa",
      price: 330,
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
      species: "Helix pomatia",
      family: "Helicidae",
      continent: "Europa",
      price: 330,
    },
  ];

  return (
    <>
      <header className="mx-4 px-2 pt-4 pb-2 border-b-2  flex justify-between items-center">
        <div className="flex items-center">
          <img src="icon.png" alt="" className="w-12" />
          <h1 className="text-2xl font-playwrite ">Caracol Planet</h1>
        </div>

        <Dropdown />
      </header>

      <main className=" w-4/5 m-auto ">
        <h3 className="my-3 font-semibold text-2xl tracking-wide">Confira:</h3>
        <ul className="grid grid-flexivel gap-5">
          {snails.map((snail: SnailInterface) => {
            return <SnailCard snail={snail} />;
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
