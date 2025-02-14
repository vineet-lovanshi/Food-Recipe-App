import React from "react";
import { useState } from "react";
import MealCard from "./MealCard";
const MainPage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // using meal db api for fetching recipe
  const myFun = async () => {
    if (search == "") {
      setMsg("Please Enter Something");
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsonData = await get.json();
      // console.log(jsonData.meals);
      setData(jsonData.meals);
      setMsg("");
    }
  };

  return (
    <>
      <h1 className="head text-3xl font-bold text-center ">Food Recipe App</h1>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="searchBar flex flex-col md:flex-row justify-center gap-2 md:gap-4 mt-6">
          <input
            type="text"
            className="w-full md:w-[400px] p-2 md:p-3 text-lg md:text-xl border border-gray-300 bg-blue-50 rounded-lg"
            placeholder="Enter dish"
            onChange={handleInput}
          />
          <button
            className=" w-full md:w-[90px] bg-orange-500 text-white text-lg font-semibold py-2 md:py-3 rounded-lg hover:bg-orange-400 transition-colors border border-gray-300"
            onClick={myFun}
          >
            Search
          </button>
        </div>
        <h4 className="msg mt-3 text-center text-lg">{msg}</h4>
        <div>
          <MealCard detail={data} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
