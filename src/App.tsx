import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SnailCard from "./components/snailCard";
import Dropdown from "./components/dropdown";
import Header from "./components/Header";
import { Toaster } from "sonner";

export type Snail = {
  imgUrl: string;
  commonName: string;
  species: string;
  continent: string;
  price: number;
};

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
      const caracois2 = JSON.parse(localStorage.getItem("caracois")!);
      setCaracois(caracois2);
    }
  }, []);

  const [pesquisaTermo, setPesquisaTermo] = useState("");
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);

  useEffect(() => {
    const resultados = caracois.filter((c: Snail) =>
      c.commonName.toLowerCase().includes(pesquisaTermo.toLowerCase())
    );
    setResultadosPesquisa(resultados);
  }, [caracois, pesquisaTermo]);

  return (
    <>
      <Toaster richColors position="top-right" />
      <Header caracois={caracois} onSetCaracois={setCaracois} />

      <main className=" w-4/5 m-auto ">
        <div className="flex justify-between items-center">
          <h3 className="my-3 font-semibold text-2xl tracking-wide">
            Confira:
          </h3>
          <div className="border rounded-sm flex h-8 p-1 ">
            <input
              type="text"
              className="focus:outline-none"
              onChange={(e) => {
                setPesquisaTermo(e.target.value);
              }}
            />
            <img src="search-icon.png" alt="" />
          </div>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {resultadosPesquisa
            ? resultadosPesquisa.map((c) => {
                return <SnailCard snail={c} />;
              })
            : caracois.map((snail: Snail) => {
                return <SnailCard snail={snail} key={snail.species} />;
              })}
        </ul>
      </main>
    </>
  );
}

export default App;
