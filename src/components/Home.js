import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import "../styles/Home.scss";
import axios from "axios";
import SlideCard from "./SlideCard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Home() {
  const baseUrl = "http://localhost:8000";
  const [user] = useContext(UserContext);
  const [recipesData, setRecipesData] = useState([]);
  const [rankingsData, setRankingsData] = useState([]);
  const [adData, setAdData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [openDel, setOpenDel] = useState(false);

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
    const postId = e.currentTarget.dataset.id;
    axios
      .patch(`${baseUrl}/recipes?postId=${postId}`, {}, config)
      .then((res) => res.data)
      .then((data) => setRefresh(!refresh))
      .catch((error) => console.error(error));
  };

  const deleteRecipes = (e) => {
    e.preventDefault();
    const postId = e.currentTarget.dataset.id;
    console.log(config);
    axios
      .delete(`${baseUrl}/recipes?postId=${postId}`, config)
      .then((res) => res.data)
      .then((data) => setRefresh(!refresh))
      .catch((error) => console.error(error));
  };

  const HomeComponents = {
    Recipes: function Recipes() {
      return recipesData.map((recipe, idx) => {
        const { id, Menu, Ingredients, Likes } = recipe;
        return (
          <li className="recipe" key={idx.toString()}>
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
            <p
              className="likes"
              onClick={(e) => likesBtnHandler(e)}
              data-id={id}
            >
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
                className={openDel ? 'delete-btn active' : 'delete-btn'}
                data-id={id}
                onClick={(e) => deleteRecipes(e)}
              >
                <DeleteForeverIcon className="del-icon"/>삭제하기
              </button>
            </div>
          </li>
        );
      });
    },
    Rankings: function Rankings() {
      return rankingsData.map((item, idx) => {
        const { title, id, Likes, User, Menu, Ingredients } = item;

        return (
          <li className="item" key={idx.toString()}>
            <span className="num">{idx + 1}</span>
            <p className="recipe-name">{title}</p>
            <img src={Menu.img} alt="menu-img" className="menu-img" />
            <ul className="ingredients">
              {Ingredients.map((ingredient, idx) => {
                return (
                  <li key={idx.toString()}>
                    <p>{ingredient.name}</p>
                    <img src={Ingredients[idx].img} alt="ingredients" />
                  </li>
                );
              })}
              <div className="writer-profile">
                <p>{User.name}</p>
                <img src={User.profileImg} alt="글쓴이" />
              </div>
              <p
                className="likes"
                onClick={(e) => likesBtnHandler(e)}
                data-id={id}
              >
                <ThumbUpIcon className="likes-icon" />
                좋아요 {Likes.length}개
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

      <section className="ad">
        <ul className="ad-slides">
          {adData.length && (
            <SlideCard adData={adData[adData.length - 1]} key={adData.length} />
          )}
          {adData.length &&
            adData.map((ad, idx) => <SlideCard adData={ad} key={idx + 1} />)}
          {adData.length && <SlideCard adData={adData[0]} key={0} />}
        </ul>
        <ul className="cicles"></ul>
      </section>
    </section>
  );
}
