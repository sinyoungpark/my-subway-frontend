import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import "../styles/Ranking.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Ranking() {
  const [user] = useContext(UserContext);
  const baseUrl = "http://localhost:8000";
  const [rankingData, setRankingsData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/rankings`, config)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setRankingsData(data.data);
      })
      .catch((error) => console.log(error));
  }, [refresh]);

  const likesBtnHandler = (e) => {
    e.preventDefault();
    const likes = Number(e.currentTarget.dataset.likes) + 1;
    const postId = Number(e.currentTarget.dataset.id);
    axios
      .patch(
        `${baseUrl}/recipes`,
        {
          postId,
          likes,
        },
        config
      )
      .then((res) => res.data)
      .then((data) => setRefresh(!refresh))
      .catch((error) => console.error(error));
  };
  return (
    <section className="section inner" id="ranking">
      <div className="top">
        <h1>
          <AutoAwesomeIcon className="star-icon" />
          샌드위치 꿀조합
        </h1>
        <Link to="/board" className="board-link-btn">
          내 레시피 올리기
        </Link>
      </div>
      <ul className="rankings">
        {rankingData &&
          rankingData.map((item, idx) => {
            const { title, id, likes, User, Menu, Ingredients } = item;

            return (
              <li className="item" key={idx.toString()}>
                <span className="num">{idx}</span>
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
                    data-likes={likes}
                    data-id={id}
                  >
                    <ThumbUpIcon className="likes-icon" />
                    좋아요 {likes} 개
                  </p>
                </ul>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
