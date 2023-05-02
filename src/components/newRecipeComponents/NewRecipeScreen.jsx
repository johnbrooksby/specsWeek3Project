import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";

const NewRecipeScreen = () => {
  const [name, setName] = useState("");
  // const [url, setUrl] = useState("");
  // const [type, setType] = useState("")
  // const [prepTime, setPrepTime] = useState("");
  // const [cookTime, setCookTime] = useState("");
  // const [serves, setServes] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [quantity, setQuantity] = useState("");
  // const [instruction, setInstructions] = useState("");

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    axios.post('https://recipes.devmountain.com/recipes', values)
    .then(res => {
     console.log(res.data)
    }).catch(err => {
    console.error(err)
    })
  };

  const ingredientList = ingredients.map(e => {
    return (
      <li>
        {e.quantity} {e.name}
      </li>
    );
  })

  return (
    <section className="formSection">
      <h1 className="detailTitle">Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik
        className="formHolder"
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="nameInput">
              <input
                className="addInput"
                placeholder="Name"
                name="recipeName"
                value={values.recipeName}
                onChange={handleChange}
              ></input>
              <input
                className="addInput"
                placeholder="Image URL"
                type="url"
                name="imageURL"
                value={values.imageURL}
                onChange={handleChange}
              ></input>
            </div>
            <div className="radioDiv">
              <input
                type="radio"
                id="cook"
                name="type"
                value="cook"
                onChange={handleChange}
              ></input>
              <label className="radioLbl" for="cook">
                Cook
              </label>
              <input
                type="radio"
                id="bake"
                name="type"
                value="bake"
                onChange={handleChange}
              ></input>
              <label className="radioLbl" for="bake">
                Bake
              </label>
              <input
                type="radio"
                id="drink"
                name="type"
                value="drink"
                onChange={handleChange}
              ></input>
              <label className="radioLbl" for="drink">
                Drink
              </label>
            </div>
            <div className="specInputs">
              <input
                className="addInput timeInput"
                placeholder="Prep Time"
                name="prepTime"
                value={values.prepTime}
                onChange={handleChange}
              ></input>
              <input
                className="addInput timeInput"
                placeholder="Cook Time"
                name="cookTime"
                value={values.cookTime}
                onChange={handleChange}
              ></input>
              <input
                className="addInput timeInput"
                placeholder="Serves"
                name="serves"
                value={values.serves}
                onChange={handleChange}
              ></input>
            </div>
            <div className="ingredients">
            <div className="ingDiv">
              <input
                className="addInput ingInput"
                placeholder="Ingredient"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="addInput ingInput"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </div>
            <div className="ingredientList">
              <ul>{ingredientList}</ul>
            </div>
            </div>
            <div className="formBtn">
              <button className="addBtn" onClick={addIngredient}>
                Add Another
              </button>
            </div>
            <textarea
              name="instructions"
              value={values.instructions}
              onChange={handleChange}
              className="addInput textArea"
              placeholder="What are the instructions?"
            ></textarea>
            <div className="formBtn">
              <button className="blue-btn">Save</button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
