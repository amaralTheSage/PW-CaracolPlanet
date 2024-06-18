import React, { useState } from "react";
import { SnailInterface } from "../App";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";

function SnailCard({ snail }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <li className="shadow-lg shadow-gray-400">
      <img src={snail.imgUrl} alt="" />
      <div className="p-2">
        <h1>Espécie: {snail.species}</h1>
        <h1>Família: {snail.family}</h1>
        <h1>Continente: {snail.continent}</h1>
        <h1>Preço: R${snail.price},00</h1>
        <div className="flex w-full justify-end">
          <div
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            {!isLiked ? (
              <FaRegThumbsUp size={21} color="" />
            ) : (
              <FaThumbsUp size={21} />
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default SnailCard;
