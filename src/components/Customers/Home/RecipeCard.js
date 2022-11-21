import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function RecipeCard({ recipe, likesBtnHandler, deleteRecipes }) {
  const { id, Menu, Ingredients, Likes } = recipe;
  const [openDel, setOpenDel] = useState(false);

  return (
    <li className="recipe">
      <p className="menu-name">{Menu.name}</p>
      <img src={Menu.img} alt="menuImg" className="menu-img" />
      <ul className="ingredients">
        {Ingredients.map((ingredient, idx) => {
          return (
            <li key={idx.toString()}>
              <p>{ingredient.name}</p>
              <img src={Ingredients[idx].img} alt="ingredientImg" />
            </li>
          );
        })}
      </ul>
      <p className="likes" onClick={(e) => likesBtnHandler(e)} data-id={id}>
        <ThumbUpIcon className="likes-icon" />
        좋아요 {Likes.length} 개
      </p>
      <div className="container">
        <div className="circles" onClick={(e) => setOpenDel(!openDel)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button
          className={openDel ? "delete-btn active" : "delete-btn"}
          data-id={id}
          onClick={(e) => deleteRecipes(e)}
        >
          <DeleteForeverIcon className="del-icon" />
          삭제하기
        </button>
      </div>
    </li>
  );
}
