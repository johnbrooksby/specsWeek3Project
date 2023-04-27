import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" style={{color:'#F5F5F5', textDecoration:"none"}}>
        <h2>Devmountain Eatery</h2>
      </Link>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/newRecipe">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
