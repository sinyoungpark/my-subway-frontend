import React, { useEffect, useState } from "react";
import "../styles/Order.scss";
import UserDialog from "./UserDialog";
import StaffDialog from "./StaffDialog";
import axios from "axios";

export default function Order() {
  const [CurMessage, setCurMessage] = useState("");
  const [staffMessage, setStaffMessage] = useState([
    "안녕하세요, 서브웨이입니다!",
    "원하시는 메뉴를 골라주세요.",
  ]);
  const [curIdx, setCurIdx] = useState(0);
  const baseUrl = "http://localhost:8000";
  const [sandwichData, setSandwichData] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    makeStaffDialog();
  }, [curIdx]);

  const getSandwichData = () => {
    axios
      .get(`${baseUrl}/menu/sandwich`)
      .then((res) => res.data)
      .then((data) => {
        setSandwichData(data.sandwichData);
      })
      .catch((err) => console.log(err));
  };

  const time = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };

  const makeStaffDialog = async () => {
    await time(2000);
    setCurMessage(`${staffMessage[curIdx]}`);

    if(curIdx === 1) getSandwichData();
    else setSandwichData([]);
  };

  const countIdx = () => {
    setCurIdx(curIdx + 1);
  };

  const selectSandwich = async(e) => {
    const sandwich = e.currentTarget.dataset.name;
    await time(2000);
    setUserMessage(sandwich);
  };

  return (
    <section className="section inner" id="order">
      <div className="dialogs">
        {CurMessage && <StaffDialog message={CurMessage} />}
        {sandwichData.length && (
          <ul className="items">
            {sandwichData &&
              sandwichData.map((item, idx) => {
                const { name, kcal, img, Type } = item;
                return (
                  <li key={idx} onClick={(e) => selectSandwich(e)} data-name={name}>
                    <img src={img} alt="" className="sandwich-img" />
                    <p className="sandwich-name">{name}</p>
                    <p className="kcal">{kcal} kcal</p>
                  </li>
                );
              })}
          </ul>
        )}
        <UserDialog message={userMessage}/>
      </div>
      <button onClick={countIdx}>다음</button>
    </section>
  );
}
