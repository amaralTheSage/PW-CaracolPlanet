import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Dropdown({ caracois, onSetCaracois }) {
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset, setFocus } = useForm();

  function cadastraCaracol(dados) {
    const caracois2 = [...caracois];
    caracois2.push({
      commonName: dados.commonName,
      species: dados.species,
      continent: dados.continent,
      imgUrl: dados.imgUrl,
      price: dados.price,
    });

    onSetCaracois(caracois2);
    // toast.success("Ok! Filme Cadastrado com Sucesso");

    setFocus("commonName");
    reset();

    localStorage.setItem("caracois", JSON.stringify(caracois2));
  }

  useEffect(() => {
    setFocus("commonName");
  }, []);

  return (
    <div className="relative inline-block text-left">
      <div onClick={() => setIsOpen(!isOpen)}>
        <h2 className=" px-2 rounded-md text-white bg-green-600">
          Adicionar Caracóis
        </h2>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <form
            onSubmit={handleSubmit(cadastraCaracol)}
            className="w-[350px] flex flex-col gap-2 p-2"
          >
            <div className="flex justify-between">
              <label htmlFor="commonName">Nome Popular: </label>
              <input
                type="text"
                id="commonName"
                required
                {...register("commonName")}
                className="border border-gray-400 rounded-sm"
              />
            </div>

            <div className="flex justify-between">
              <label htmlFor="species">Especie:</label>

              <input
                type="text"
                id="species"
                required
                {...register("species")}
                className="border border-gray-400 rounded-sm"
              />
            </div>

            <div className="flex justify-between">
              <label htmlFor="continent">Origem:</label>
              <input
                type="text"
                id="continent"
                required
                {...register("continent")}
                className="border border-gray-400 rounded-sm"
              />
            </div>

            <div className="flex justify-between">
              <label htmlFor="imgUrl">URL da Foto:</label>

              <input
                type="text"
                id="imgUrl"
                required
                {...register("imgUrl")}
                className="border border-gray-400 rounded-sm"
              />
            </div>

            <div className="flex justify-between">
              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                {...register("price")}
                className="border border-gray-400 rounded-sm"
              />
            </div>

            <input
              type="submit"
              value="Cadastrar"
              className="bg-green-600 px-3 py-1 rounded-md text-white"
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
