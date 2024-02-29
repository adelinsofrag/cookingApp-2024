import React from "react";
import TextComponent from "../components/TextComponent";
import RandomMealComponent from "../components/RandomMealComponent";

const RandomMealsContainer = () => {
  return (
    <>
      <TextComponent text="Try something new" />

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <RandomMealComponent />
        <RandomMealComponent />
        <RandomMealComponent />
      </div>
    </>
  );
};

export default RandomMealsContainer;
