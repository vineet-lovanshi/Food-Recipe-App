import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();
  //   console.log(mealid);

  // get food details with api by id

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsonData = await get.json();
    // console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  };
  if (info != "") {
    getInfo();
  }
  return (
    <>
      {!info ? (
        <p className="text-gray-700 text-lg">Recipe Not Found</p>
      ) : (
        <div className="mealInfo   flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 max-w-4xl mx-auto h-[90vh] overflow-hidden">
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
            className="w-72 h-72 rounded-lg object-cover md:w-80 md:h-80"
          />
          <div className="info flex flex-col items-start  text-left mt-4 md:mt-0 overflow-y-auto  p-4">
            <h1 className="text-2xl font-bold mb-2 text-gray-800">
              Recipe Details
            </h1>
            <button className="bg-orange-500 text-white text-lg font-semibold py-2 px-4 rounded mb-4 mt-2 hover:bg-orange-600 transition">
              {info.strMeal}
            </button>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Instructions
            </h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              {info.strInstructions}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default MealInfo;
