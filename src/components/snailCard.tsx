import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { Snail } from "../App";
import { toast } from "sonner";

function SnailCard({
  snail,
  caracois,
  onSetCaracois,
  i,
}: {
  snail: Snail;
  caracois: any;
  onSetCaracois: any;
  i: number;
}) {
  useEffect(() => {
    localStorage.setItem("caracois", JSON.stringify(caracois));
  }, [caracois]);

  return (
    <li className="shadow-lg shadow-gray-400 min-h-[320px] flex flex-col justify-between">
      <div>
        <img
          src={snail.imgUrl}
          alt=""
          className="w-full aspect-[14/9] object-cover "
        />
        <div className="p-2">
          <h1>Nome Popular: {snail.commonName}</h1>
          <h1>Espécie: {snail.species}</h1>
          <h1>Continente: {snail.continent}</h1>
          <h1>Preço: R${snail.price},00</h1>
        </div>
      </div>
      <div className="relative">
        <div
          onClick={() => {
            let caracois2 = [...caracois];
            caracois2.splice(i, 1);
            onSetCaracois(caracois2);
          }}
          className="absolute right-2 bottom-3"
        >
          <img src="lixeira.png" alt="" className="w-6 mr-2" />
        </div>
      </div>
    </li>
  );
}

export default SnailCard;
