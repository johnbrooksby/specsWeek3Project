import React from "react";

const RecipeCard = () => {
  return (
    <div className="recipe-results-container">
      <div className="RecipeCard">
        <div className="recipe-card-container">
          <img
          alt="duck pizza"
            className="recipe-card-img"
            src="https://images.ctfassets.net/nw5k25xfqsik/zXAi4ShNimrCwcrLBm8Bz/187a1d777f53c0562c5d64bff4e48420/Confit_Foie_Gras_Pizza.jpg"
          />
        </div>
        <h3 className="recipe-card-title">Foie Gras Pizza</h3>
        <button className="blue-btn" onClick={() => {}}>
          See More
        </button>
      </div>
      <div className="RecipeCard">
        <div className="recipe-card-container">
          <img
          alt="duck pizza"
            className="recipe-card-img"
            src="https://images.ctfassets.net/nw5k25xfqsik/zXAi4ShNimrCwcrLBm8Bz/187a1d777f53c0562c5d64bff4e48420/Confit_Foie_Gras_Pizza.jpg"
          />
        </div>
        <h3 className="recipe-card-title">Foie Gras Pizza</h3>
        <button className="blue-btn" onClick={() => {}}>
          See More
        </button>
      </div>
      <div className="RecipeCard">
        <div className="recipe-card-container">
          <img
          alt="duck pizza"
            className="recipe-card-img"
            src="https://images.ctfassets.net/nw5k25xfqsik/zXAi4ShNimrCwcrLBm8Bz/187a1d777f53c0562c5d64bff4e48420/Confit_Foie_Gras_Pizza.jpg"
          />
        </div>
        <h3 className="recipe-card-title">Foie Gras Pizza</h3>
        <button className="blue-btn" onClick={() => {}}>
          See More
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
