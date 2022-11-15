import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./App";
import "../styles/Home.scss";
import axios from "axios";
import AdSlide from "./AdSlide";

export default function Home() {
  const baseUrl = "http://localhost:8000";
  const [user] = useContext(UserContext);
  const [recipesData, setRecipesData] = useState([]);
  const [rankingsData, setRankingsData] = useState([]);
  const [adData, setAdData] = useState([]);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    getRecipesData();
    getRakingsData();
    getAdData();
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

  const getAdData = () => {
    axios
      .get(`${baseUrl}/ad`, config)
      .then((res) => res.data)
      .then((data) => {
        setAdData(data.adData);
      })
      .catch((error) => console.log(error));
  };

  const HomeComponents = {
    Recipes: function Recipes() {
      return recipesData.map((recipe,idx) => {
        const { menu, menuImg, ingredients, ingredientsImg, id, likes } =
          recipe;
        return (
          <li className="recipe" key={idx.toString()}>
            <p className="menu-name">{menu}</p>
            <img src={menuImg} alt="menuImg" className="menu-img" />
            <ul className="ingredients">
              {ingredients.map((ingredient, idx) => {
                return (
                  <li key={idx.toString()}>
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
          <li className="item" key={idx.toString()}>
            <span className="num">{idx}</span>
            <p className="recipe-name">{title}</p>
            <img src={menuImg} alt="menu-img" className="menu-img" />
            <ul className="ingredients">
              {ingredientsData.map((ingredient, idx) => {
                return (
                  <li key={idx.toString()}>
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

      <section className="ad">{adData&& <AdSlide adData={adData}/>}</section>
    </section>
  );
}
