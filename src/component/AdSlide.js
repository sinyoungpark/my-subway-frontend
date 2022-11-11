import React, { useEffect, useState } from "react";

const AdSlide = ({ adData }) => {
  let total = adData.length;
  const [firstChild, setFirstChild] = useState({});
  const [lastChild, setLastChild] = useState({});

  //슬라이드 리스트 생성, circle 생성

  return (
    <>
      <ul className="ad-slides">
        <li>
          {adData.map((item, idx) => {
            if (idx === adData.length - 1) {
              return (
                <li key="0">
                  <img src={item.img} />
                </li>
              );
            }
          })}
        </li>
        {
          //광고이미지
          adData.map((item, idx) => {
            return (
              <li key={(idx + 1).toString()}>
                <img src={item.img} alt="" />
              </li>
            );
          })
        }
        {adData.map((item, idx) => {
          if (idx === 0) {
            return (
              <li key={String(adData.length)}>
                <img src={item.img} />
              </li>
            );
          }
        })}
      </ul>
      <ul className="circles">
        <li></li>
        {
          //circles
          adData.map((item, idx) => {
            return <li key={idx.toString()}></li>;
          })
        }
        <li></li>
      </ul>
    </>
  );
};

export default AdSlide;
