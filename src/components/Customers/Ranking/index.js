import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { UserContext } from "../../../App";
import { RankingList, RankingSection, TopSection } from "./styles";
import RankingCard from "../Home/RankingCard";

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
        setRankingsData(data.data);
      })
      .catch((error) => console.log(error));
  }, [refresh, user]);

  const likesBtnHandler = (e) => {
    e.preventDefault();
    const postId = e.currentTarget.dataset.id;
    axios
      .patch(`${baseUrl}/recipes?postId=${postId}`, {}, config)
      .then((res) => res.data)
      .then((data) => setRefresh(!refresh))
      .catch((error) => console.error(error));
  };

  const rankingsElements =
    rankingData &&
    rankingData.map((item, idx) => (
      <RankingCard
        item={item}
        num={idx + 1}
        likesBtnHandler={likesBtnHandler}
      />
    ));

  return (
    <RankingSection>
      <TopSection>
        <h1>
          <AutoAwesomeIcon className="star-icon" />
          샌드위치 꿀조합
        </h1>
        <Link to="/board" className="board-link-btn">
          내 레시피 올리기
        </Link>
      </TopSection>
      <RankingList>{rankingsElements}</RankingList>
    </RankingSection>
  );
}
