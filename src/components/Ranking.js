import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Ranking() {
  const baseUrl = "http://localhost:8000";
  const [rankingData, setRankingsData] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`${baseUrl}/rankings`)
    //   .then((res) => res.data)
    //   .then((data) => {
    //     setRankingsData(data.data);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <section className="section" id="ranking">
      {rankingData &&
        rankingData.map((item, idx) => {
          const {
            writer,
            writerImg,
            title,
            menuImg,
            ingredientsData,
            ingredientsImg,
            menu,
            likes,
          } = item;

          return (
            <li className="item" key={idx.toString()}>
              <span className="num">{idx}</span>
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
                <p className="writer-profile">{writer}</p>
                <img src={writerImg} alt="글쓴이" />
                <p className="likes">{likes}</p>
              </ul>
            </li>
          );
        })}
    </section>
  );
}
