import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
import "../css/Home.css";
import axios from "axios";

export default function Home() {
  const baseUrl = "http://localhost:8000";
  const [user] = useContext(UserContext);
  const [recipesData, setRecipesData] = useState([]);
  const [rankingsData, setRankingsData] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    getRecipesData();
    getRakingsData();
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

  const getRakingsData = () => {
    axios
      .get(`${baseUrl}/rankings`, config)
      .then((res) => res.data)
      .then((data) => {
        setRankingsData(data.data);
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
    Rankings: function Rankings() {
      return rankingsData.map((item, idx) => {
        const {
          writer,
          writerImg,
          title,
          menuImg,
          ingredientsData,
          ingredientsImg,
          menu,
          likes,
        } = item;

        return (
          <li className="item">
            <span className="num">{idx}</span>
            <p className="recipe-name">{title}</p>
            <img src={menuImg} alt="menu-img" className="menu-img" />
            <ul className="ingredients">
              {ingredientsData.map((ingredient, idx) => {
                return (
                  <li>
                    <p>{ingredient}</p>
                    <img src={ingredientsImg[idx]} alt="ingredients" />
                  </li>
                );
              })}
              <p className="writer-profile">{writer}</p>
              <img src={writerImg} alt="글쓴이" />
              <p className="likes">{likes}</p>
            </ul>
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
        <ul className="recipes">{recipesData && <HomeComponents.Recipes />}</ul>
      </section>

      <section className="ranking">
        <h2 className="sub-tlt">랭킹</h2>
        <ul className="rankings">
          {rankingsData && <HomeComponents.Rankings />}
        </ul>
      </section>

      <section className="ad"></section>
    </section>
  );
}
