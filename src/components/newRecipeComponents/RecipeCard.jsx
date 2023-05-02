import React from "react";
import {useNavigate} from "react-router-dom"

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipes/${recipe.recipe_id}`);
    window.scrollTo(0, 0)
  };
  return (
    <div className="RecipeCard">
      <div className="recipe-card-container">
        <img
          alt={recipe.recipe_name + " image"}
          className="recipe-card-img"
          src={recipe.image_url}
        />
      </div>
      <h3 className="recipe-card-title">{recipe.recipe_name}</h3>
      <button className="blue-btn" onClick={handleClick}>
        See More
      </button>
    </div>
  );
};

export default RecipeCard;
