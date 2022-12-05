import React, { useContext, useEffect, useRef, useState } from "react";
import { RequestUrl, UserContext } from "../../../App";
import axios from "axios";
import SlideCard from "./SlideCard";
import {
  HomeSection,
  Recipes,
  Subtlt,
  Rankings,
  Ads,
  Slides,
  Circles,
} from "./styles";
import RecipeCard from "./RecipeCard";
import RankingCard from "./RankingCard";

export default function Home() {
  const [baseUrl] = useContext(RequestUrl);
  const [user] = useContext(UserContext);
  const [recipesData, setRecipesData] = useState([]);
  const [adData, setAdData] = useState([]);
  const [rankingData, setRankingsData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // //슬라이드를 위한 변수
  const [curIdx, setCurIdx] = useState(1);
  const adListRef = useRef(null);
  const adEl = useRef(null);

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    getAdData();
  }, []);

  useEffect(() => {
    getRecipesData();
    getRakingsData();
    setRefresh(false);
  }, [user, refresh]);

  useEffect(() => {
    slideTimer();
    if (adEl.current !== null) {
      console.log("notnulll");
      adListRef.current.style.left = `-${adEl.current.clientWidth * curIdx}px`;
    }
  }, [curIdx, adData]);

  const getAdData = () => {
    axios
      .get(`${baseUrl}/ad`, config)
      .then((res) => res.data)
      .then((data) => {
        setAdData(data.adData);
      })
      .catch((error) => console.log(error));
  };

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
      .then((data) => getRecipesData())
      .catch((error) => console.error(error));
  };

  // 슬라이드
  const slideTimer = () =>
    setTimeout(() => {
      if (curIdx < adData.length) setCurIdx(curIdx + 1);
      else {
        setCurIdx(1);
      }
    }, 3000);

  const recipesElements =
    recipesData &&
    recipesData.map((recipe) => (
      <RecipeCard
        recipe={recipe}
        likesBtnHandler={likesBtnHandler}
        deleteRecipes={deleteRecipes}
      />
    ));

  const rankingsElements =
    rankingData &&
    rankingData.map((item, idx) => (
      <RankingCard
        item={item}
        num={idx + 1}
        likesBtnHandler={likesBtnHandler}
      />
    ));

  const adElements =
    adData && adData.map((ad, idx) => <SlideCard adData={ad} key={idx + 1} />);

  const circleElements =
    adData &&
    adData.map((ad, idx) => (
      <li className={idx + 1 === curIdx ? "active" : null} key={idx + 1}></li>
    ));

  return (
    <HomeSection>
      <Recipes>
        <Subtlt>내 레시피</Subtlt>
        <ul className="recipes">{recipesElements}</ul>
      </Recipes>

      <Rankings>
        <Subtlt>랭킹 TOP 10</Subtlt>
        <ul className="rankings">{rankingsElements}</ul>
      </Rankings>

      <Ads>
        <Slides ref={adListRef}>
          {adData.length && (
            <SlideCard
              adData={adData[adData.length - 1]}
              key={adData.length}
              ref={adEl}
            />
          )}
          {adElements}
          {adData.length && <SlideCard adData={adData[0]} key={0} />}
        </Slides>
        <Circles>
          <li></li>
          {circleElements}
          <li></li>
        </Circles>
      </Ads>
    </HomeSection>
  );
}
