import React, { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { Snail } from "../App";

function SnailCard({ snail }: { snail: Snail }) {
  const [isLiked, setIsLiked] = useState(false);

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
            setIsLiked(!isLiked);
          }}
          className="absolute right-2 bottom-3"
        >
          {!isLiked ? <FaRegThumbsUp size={21} /> : <FaThumbsUp size={21} />}
        </div>
      </div>
    </li>
  );
}

export default SnailCard;
