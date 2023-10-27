import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

interface Props {
  info: Info;
  results: Results[];
}
interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}
interface Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}
function Rickandmorty() {
  const api = "https://rickandmortyapi.com/api/character/";
  const [person, setPerson] = useState<Props>();
  const [text, setText] = useState("");

  useEffect(() => {
    getPersons();
    getText();
  }, []);

  const getPersons = async () => {
    const response = await axios.get(`${api}`);
    setPerson(response.data);
  };

  const valueText = "";

  const getText = () => {
    setText(valueText);
  };

  return (
    <>
      <div className=" bg-gray-900 py-16">
        <nav className="flex justify-around gap-96">
          <div className=" w-24 rounded-full">
            <img className="rounded-full" src="/public/and.jpg" alt="" />
          </div>
          <div className="flex justify-center w-96items-center">
            <input
              className=" p-6 w-96 h-10 rounded-xl pr-24 relative "
              type="text"
            />
            <button>
              <img
                className="absolute top-20 right-72 bottom-0"
                src="/public/find.svg"
                alt=""
              />
            </button>
          </div>
        </nav>
        <section className="flex justify-center py-20 w-full flex-wrap gap-10">
          {person?.results.map((el, i) => (
            <Card key={i} pers={el} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Rickandmorty;
