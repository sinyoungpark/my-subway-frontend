import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Sandwich.css";

export default function Sandwich() {
  const baseUrl = "http://localhost:8000";
  const [sandwichData, setSandwichData] = useState([]);
  
  useEffect(() => {
    axios.get(`${baseUrl}/menu/sandwich`)
    .then((res) => res.data)
    .then((data) => {
      setSandwichData(data.sandwichData);
    })
    .catch((err) => console.log(err));
  },[]);

  return (
    <section className="section" id="sandwich">
      <section className="main-visual">
        <h2 className="main-tlt">
          Sandwich
          <p>전세계 넘버원 브랜드 Subway!</p>
          <p>50년 전통의 세계 최고의 샌드위치를 맛보세요!</p>
        </h2>
      </section>
      <section className="main-contents">
        <ul className="category">
          <li>All</li>
          <li>클래식</li>
          <li>{`플래쉬&라이트`}</li>
          <li>프리미엄</li>
          <li>신제품</li>
        </ul>
        <ul className="items">
          {
            sandwichData && sandwichData.map((item) => {
              const {name,kcal, img, Type} = item;
              return (
                <li>
                  <img src={img} alt="" className="sandwich-img" />
                  <p className="sandwich-name">{name}</p>
                  <p className="kcal">{kcal} kcal</p>
                </li>
              )
            })
          }
        </ul>
      </section>
    </section>
  );
}
