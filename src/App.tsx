import { useEffect, useState } from "react";
import NavDash from "./components/NavDash";
import axios from "axios";
const api =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=2c0ba7d6a9a345c8bec503396c49a259";
interface props {
  results: articles;
}
interface articles {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

function App() {
  const [news, setNews] = useState<props[]>();

  useEffect(() => {
    getnews();
  }, []);

  const getnews = async () => {
    const response = await axios.get(`${api}`);
    setNews(response.data);
  };
  console.log(news);

  return (
    <>
      <div className=" bg-slate-300 h-screen px-14 py-10 flex">
        <div className="bg-black h-full w-2/12 text-white p-7 ">
          <div className="w-10 justify-start mb-10">
            <img src="/public/paralelo.png" alt="" />
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/grid.svg" alt="" />
            </div>
            <h1 className="font-medium">Dashboard</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/feeds.svg" alt="" />
            </div>
            <h1 className="font-medium">Feeds</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/tasks.svg" alt="" />
            </div>
            <h1 className="font-medium">Tasks</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/employee.svg" alt="" />
            </div>
            <h1 className="font-medium">Employee</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/payroll.svg" alt="" />
            </div>
            <h1 className="font-medium">Payroll</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/leaves.svg" alt="" />
            </div>
            <h1 className="font-medium">Leaves</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/circles.svg" alt="" />
            </div>
            <h1 className="font-medium">Reports</h1>
          </div>
          <div className="flex gap-3 items-center mb-8 cursor-pointer">
            <div className="">
              <img src="/public/settings.svg" alt="" />
            </div>
            <h1 className="font-medium">Settings</h1>
          </div>
        </div>
        <div className="bg-gray-100 w-full">
          <NavDash />
          <table>
            <thead>
              <tr>
                <th>News</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {news?.articles.map((e) => (
                <tr key={e.author}>
                  <td className="w-20">
                    <img src={e.urlToImage} alt="" />
                  </td>
                  <td>{e.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
