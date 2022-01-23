import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //   const categories = ["One punch", "Samurai", "Dragon Ball"];

  const [category, setCategory] = useState(["One punch"]);

  // const addCategory = (value="ShadowHunters") => {
  //     //setCategory([...category,"ShadowHunters"] );
  //     setCategory(cats=>[...cats,"Shadow"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategory={setCategory} />
      <ol>
        {category.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
