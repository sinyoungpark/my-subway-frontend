import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import "../styles/Home.scss";
import axios from "axios";
import AdSlide from "./AdSlide";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Home() {
  const baseUrl = "http://localhost:8000";
  const [user] = useContext(UserContext);
  const [recipesData, setRecipesData] = useState([]);
  const [rankingsData, setRankingsData] = useState([]);
  const [adData, setAdData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    getRecipesData();
    getRakingsData();
    getAdData();
  }, [user, refresh]);

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

  const likesBtnHandler = (e) => {
    e.preventDefault();
    const likes = Number(e.currentTarget.dataset.likes) + 1;
    const postId = Number(e.currentTarget.dataset.id);
    axios.patch(`${baseUrl}/recipes`,{
      postId,
      likes
    }, config)
    .then((res) => res.data)
    .then((data) => setRefresh(!refresh))
    .catch((error) => console.error(error));
  }

  const HomeComponents = {
    Recipes: function Recipes() {
      return recipesData.map((recipe, idx) => {
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
            <p className="likes" onClick={(e) => likesBtnHandler(e)} data-likes={likes} data-id={id}>
              <ThumbUpIcon className="likes-icon" />
              좋아요 {likes}개
            </p>
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
          id,
          likes,
        } = item;

        return (
          <li className="item" key={idx.toString()}>
            <span className="num">{idx + 1}</span>
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
              <div className="writer-profile">
                <p>{writer}</p>
                <img src={writerImg} alt="글쓴이" />
              </div>
              <p className="likes" onClick={(e) => likesBtnHandler(e)} data-likes={likes} data-id={id}>
                <ThumbUpIcon className="likes-icon" />
                좋아요 {likes}개
              </p>
            </ul>
          </li>
        );
      });
    },
  };

  return (
    <section className="section inner" id="home">
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

      <section className="ad">{adData && <AdSlide adData={adData} />}</section>
    </section>
  );
}
