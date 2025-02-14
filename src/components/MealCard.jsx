import React from "react";
import { NavLink } from "react-router-dom";

const MealCard = ({ detail }) => {
  // console.log(detail);
  return (
    <>
      <div className="meals grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-[90%] mx-auto mt-11">
        {!detail ? (
          <p className="col-span-full text-center text-lg ">Data Not Found</p>
        ) : (
          detail.map((curItem) => {
            return (
              <div key={curItem.idMeal} className="mealImg">
                <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default MealCard;
