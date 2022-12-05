import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Category,
  Inner,
  Item,
  Items,
  Maintlt,
  MainVisual,
  MenuSection,
} from "./styles";
import mainImg from "../../../img/img_visual_sandwich.jpg";
import { RequestUrl } from "../../../App";

export default function Ingredients() {
  const [baseUrl] = useContext(RequestUrl);
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/menu/ingredients`)
      .then((res) => res.data)
      .then((data) => {
        setIngredientsData(data.ingredientsData);
      })
      .catch((err) => console.log(err));
  },[]);

  const ingredientElements = ingredientsData.map((item) => {
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
          Fresh Ingredients
          <p>매장에서 직접 굽는 빵, 엄격하게 세척하는 애채의 신선함</p>
          <p>써브웨이만의 다양한 소스를 맛보세요.</p>
        </Maintlt>
      </MainVisual>
      <Inner>
        {/* <Category>
          <li>All</li>
          <li>빵</li>
          <li>야채</li>
          <li>치즈</li>
          <li>소스</li>
        </Category> */}
        <Items>{ingredientElements}</Items>
      </Inner>
    </MenuSection>
  );
}
