import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../newRecipeComponents/RecipeCard";
import {BiSearchAlt2} from 'react-icons/bi'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
    });
  });

  // const recipeDisplay = recipes
  //   .filter((rec, ind) => {
  //     return rec.recipe_name.includes(search);
  //   })
  //   .map((rec, ind) => {
  //     return <RecipeCard recipe={rec} index={ind} />;
  //   });

  return (
    <div>
      <AdBanner />
      <div className="input-box">
        <BiSearchAlt2 size="25px" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
          className="input"
        />
      </div>
      <RecipeCard />
    </div>
  );
};

export default HomeScreen;
