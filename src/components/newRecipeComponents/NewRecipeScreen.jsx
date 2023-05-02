import React, { useState } from "react";

const NewRecipeScreen = () => {
  // const [name, setName] = useState("");
  // const [url, setUrl] = useState("");
  // const [type, setType] = useState("")
  // const [prepTime, setPrepTime] = useState("");
  // const [cookTime, setCookTime] = useState("");
  // const [serves, setServes] = useState("");
  // const [ingredient, setIngredient] = useState([]);
  // const [quantity, setQuantity] = useState("");
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

const onSubmit = (values) => {
    console.log(values)
}

  return (
    <section>
      <h1 className="detailTitle">Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <div className="formHolder">
        <form>
          <div>
            <input className="addInput" placeholder="Name"></input>
            <input
              className="addInput"
              placeholder="Image URL"
              type="url"
            ></input>
          </div>
          <div className="radioDiv">
            <input type="radio" id="cook" name="type" value="cook"></input>
            <label for="cook">Cook</label>
            <input type="radio" id="bake" name="type" value="bake"></input>
            <label for="bake">Bake</label>
            <input type="radio" id="drink" name="type" value="drink"></input>
            <label for="drink">Drink</label>
          </div>
          <div className="specInputs">
            <input className="addInput timeInput" placeholder="Prep Time"></input>
            <input className="addInput timeInput" placeholder="Cook Time"></input>
            <input className="addInput timeInput" placeholder="Serves"></input>
          </div>
          <div className="ingDiv">
            <input className="addInput" placeholder="Ingredient"></input>
            <input className="addInput" placeholder="Quantity"></input>
          </div>
          <div>
            <ul></ul>
          </div>
          <div className="adBtn">
            <button className="addBtn">Add Another</button>
          </div>
          <input className="addInput" type="" placeholder="What are the instructions?"></input>
          <div className="adBtn">
            <button className="blue-btn">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewRecipeScreen;
