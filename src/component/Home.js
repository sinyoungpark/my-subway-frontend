import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
import "../css/Home.css";
import axios from "axios";

export default function Home() {
  const baseUrl = "http://localhost:8000";
  const [user] = useContext(UserContext);
  const [recipesData, setRecipesData] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    getRecipesData();
  }, [user]);

  const getRecipesData = () => {
    axios
      .get(`${baseUrl}/recipes`, config)
      .then((res) => res.data)
      .then((data) => {
        setRecipesData(data.data);
      })
      .catch((error) => console.log(error));
  };

  const HomeComponents = {
    Recipes: function Recipes() {
      return recipesData.map((recipe) => {
        const { menu, menuImg, ingredients, ingredientsImg, id, likes } =
          recipe;
        return (
          <li className="recipe">
            <p className="menu-name">{menu}</p>
            <img src={menuImg} alt="menuImg" className="menu-img" />
            <ul className="ingredients">
              {ingredients.map((ingredient, idx) => {
                return (
                  <li>
                    <p>{ingredient}</p>
                    <img src={ingredientsImg[idx]} alt="ingredientImg" />
                  </li>
                );
              })}
            </ul>
            <p className="likes">{likes}</p>
          </li>
        );
      });
    },
  };

  return (
    <section className="section" id="home">
      {!user.accesstoken && <Navigate to="/login" replace={true} />}
      <section className="my-recipes">
        <h2 className="sub-tlt">내 레시피</h2>
        <ul className="recipes">
          {
            recipesData && <HomeComponents.Recipes/>
          }        
        </ul>
      </section>

      <section className="ranking">
        <h2 className="sub-tlt">랭킹</h2>
        <ul className="ranking"></ul>
      </section>

      <section className="ad"></section>
    </section>
  );
}
