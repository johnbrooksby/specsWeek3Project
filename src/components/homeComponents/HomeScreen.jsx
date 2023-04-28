import React, { useState, useEffect } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeCard from "../newRecipeComponents/RecipeCard";
import { BiSearchAlt2 } from "react-icons/bi";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
    });
  });

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

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
      <div className="recipe-results-container">{recipeDisplay}</div>
    </div>
  );
};

export default HomeScreen;
