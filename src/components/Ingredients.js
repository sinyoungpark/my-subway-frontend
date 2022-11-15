import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/Ingredients.scss";

export default function Ingredients() {
  const baseUrl = "http://localhost:8000";
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/menu/ingredients`)
      .then((res) => res.data)
      .then((data) => {
        setIngredientsData(data.ingredientsData);
      })
      .catch((err) => console.log(err));
  });

  return (
    <section className="section" id="ingredients">
      <section className="main-visual">
        <h2 className="main-tlt">
          Fresh Ingredients
          <p>매장에서 직접 굽는 빵, 엄격하게 세척하는 애채의 신선함</p>
          <p>써브웨이만의 다양한 소스를 맛보세요.</p>
        </h2>
      </section>
      <section className="main-contents">
        <ul className="category">
          <li>All</li>
          <li>빵</li>
          <li>야채</li>
          <li>치즈</li>
          <li>소스</li>
        </ul>
        <ul className="items">
          {ingredientsData &&
            ingredientsData.map((item) => {
              const { name, kcal, img, Type } = item;
              return (
                <li>
                  <img src={img} alt="" className="ingredient-img" />
                  <p className="ingredient-name">{name}</p>
                  <p className="kcal">{kcal} kcal</p>
                </li>
              );
            })}
        </ul>
      </section>
    </section>
  );
}
