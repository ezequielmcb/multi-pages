import { useEffect, useState } from "react";

const Card = ({ pers }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (pers.status === "Dead") {
      setStatus("bg-red-800");
    } else if (pers.status === "Alive") {
      setStatus("bg-green-500");
    } else {
      setStatus("bg-gray-300");
    }
  }, [pers.status]);

  return (
    <div className="flex items-center rounded-lg gap-6 w-2/5 bg-slate-600 h-72 ">
      <div className="h-full w-64 flex justify-start">
        <img className="h-full rounded-l-lg" src={pers.image} alt="" />
      </div>
      <div className="text-white">
        <div>
          <h1 className="text-white font-medium text-4xl font-serif">
            {pers.name}
          </h1>
          <div className="flex gap-2  font-medium text-xl items-center ">
            <div className={`${status} w-3 h-3 rounded-full`}></div>
            <h3 className="text-white ">{pers.status}</h3>
            <p>-</p>
            <h3>{pers.species}</h3>
          </div>
        </div>
        <div className="mt-8 font-medium text-xl">
          <h1 className="text-gray-400">Sexo : </h1>
          <h1>{pers.gender}</h1>
        </div>
        <div className="mt-8 font-medium text-xl">
          <h1 className="text-gray-400">Origin : </h1>
          <h1>{pers.origin.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
