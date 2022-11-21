import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Maintlt,
  MainVisual,
  MenuSection,
  Inner,
  Items,
  Item,
  Category,
} from "./styles";
import mainImg from "../../../img/img_visual_sandwich.jpg";

export default function Sandwich() {
  const baseUrl = "http://localhost:8000";
  const [sandwichData, setSandwichData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/menu/sandwich`)
      .then((res) => res.data)
      .then((data) => {
        setSandwichData(data.sandwichData);
      })
      .catch((err) => console.log(err));
  }, []);

  const sandwichElements = sandwichData.map((item) => {
    const { name, kcal, img, Type } = item;
    return (
      <Item>
        <img src={img} alt="" className="item-img" />
        <p className="item-name">{name}</p>
        <p className="kcal">{kcal} kcal</p>
      </Item>
    );
  });
  return (
    <MenuSection>
      <MainVisual>
        <img src={mainImg}></img>
        <Maintlt>
          Sandwich
          <p>전세계 넘버원 브랜드 Subway!</p>
          <p>50년 전통의 세계 최고의 샌드위치를 맛보세요!</p>
        </Maintlt>
      </MainVisual>
      <Inner>
        <Category>
          <li>All</li>
          <li>클래식</li>
          <li>{`플래쉬&라이트`}</li>
          <li>프리미엄</li>
          <li>신제품</li>
        </Category>
        <Items>{sandwichData && sandwichElements}</Items>
      </Inner>
    </MenuSection>
  );
}
