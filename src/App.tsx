import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SnailCard from "./components/snailCard";
import Dropdown from "./components/dropdown";
import Header from "./components/Header";

export interface SnailInterface {
  imgUrl: string;
  commonName: string;
  species: string;
  continent: string;
  price: number;
}

// const snails = [
//   {
//     imgUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
//     commonName: "Scargot",
//     species: "Helix pomatia",
//     continent: "Europa",
//     price: 330,
//   },
//   {
//     imgUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
//     commonName: "Scargot",
//     species: "Helix pomatia",
//     continent: "Europa",
//     price: 330,
//   },
//   {
//     imgUrl:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Helix_pomatia_89a.jpg/280px-Helix_pomatia_89a.jpg",
//     commonName: "Scargot",
//     species: "Helix pomatia",
//     continent: "Europa",
//     price: 330,
//   },
// ];

function App() {
  const [caracois, setCaracois] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("caracois")) {
      const caracois2 = JSON.parse(localStorage.getItem("caracois"));
      setCaracois(caracois2);
    }
  }, []);

  return (
    <>
      <Header />

      <main className=" w-4/5 m-auto ">
        <h3 className="my-3 font-semibold text-2xl tracking-wide">Confira:</h3>
        <ul className="grid grid-flexivel gap-5">
          {caracois.map((snail: SnailInterface) => {
            return <SnailCard snail={snail} />;
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
