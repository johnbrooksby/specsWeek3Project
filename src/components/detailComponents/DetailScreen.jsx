import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      console.log(res.data);
      setRecipe(res.data);
    });
  });

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)),
          url(${recipe.image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          height: "300px",
        }}
        className="adBanner"
      >
        <div className="ad_Text">
          <h1>{recipe.recipe_name}</h1>
        </div>
      </div>
      <div className="detailMain">
        <div className="detailCard">
          <div className="detail-card-container">
          <h1 className="detailTitle">Recipe</h1>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
          </div>

          <h1 className="detailTitle">Instructions</h1>
          {recipe.ingredients &&
            recipe.ingredients.map((ing, index) => {
              return (
                <h4>
                  {ing.quantity} {ing.ingredient}
                </h4>
              );
            })}
        </div>
        <div className="detailCard">
          <p style={{ whiteSpace: "pre-wrap" }}>
            <h1 className="detailTitle">Instructions</h1>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
