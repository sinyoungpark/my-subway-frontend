import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { IngredinetItems, RankingItem, Writer, LikeBtn } from "./styles";

export default function RankingCard({ item, num, likesBtnHandler }) {
  const { title, id, Likes, User, Menu, Ingredients } = item;

  return (
    <RankingItem>
      <span className="num">{num}</span>
      <p className="recipe-name">{title}</p>
      <img src={Menu.img} alt="menu-img" className="menu-img" />
      <IngredinetItems>
        {Ingredients.map((ingredient, idx) => {
          return (
            <li key={idx.toString()}>
              <p>{ingredient.name}</p>
              <img src={Ingredients[idx].img} alt="ingredients" />
            </li>
          );
        })}
      </IngredinetItems>
      <Writer>
        <p>{User.name}</p>
        <img src={User.profileImg} alt="글쓴이" />
      </Writer>
      <LikeBtn className="likes" onClick={(e) => likesBtnHandler(e)} data-id={id}>
        <ThumbUpIcon className="likes-icon" />
        좋아요 {Likes.length}개
      </LikeBtn>
    </RankingItem>
  );
}
