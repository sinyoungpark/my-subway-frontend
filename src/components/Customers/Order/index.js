import React, { useContext, useEffect, useState } from "react";
import UserDialog from "./UserDialog";
import StaffDialog from "./StaffDialog";
import axios from "axios";
import { Dialogs, OrderSection, SandwichItem, Sandwich } from "./styles";
import { RequestUrl } from "../../../App";

export default function Order() {
  const [baseUrl] = useContext(RequestUrl);
  const [CurMessage, setCurMessage] = useState("");
  const [staffMessage, setStaffMessage] = useState([
    "안녕하세요, 서브웨이입니다!",
    "원하시는 메뉴를 골라주세요.",
  ]);
  const [curIdx, setCurIdx] = useState(0);
  const [sandwichData, setSandwichData] = useState([]);
  const [userMessage, setUserMessage] = useState("");

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

    if (curIdx === 1) getSandwichData();
    else setSandwichData([]);
  };

  const countIdx = () => {
    setCurIdx(curIdx + 1);
  };

  const selectSandwich = async (e) => {
    const sandwich = e.currentTarget.dataset.name;
    await time(2000);
    setUserMessage(sandwich);
  };

  const sandwichElements =
    sandwichData &&
    sandwichData.map((item, idx) => {
      const { name, kcal, img, Type } = item;
      return (
        <Sandwich key={idx} onClick={(e) => selectSandwich(e)} data-name={name}>
          <img src={img} alt="" className="sandwich-img" />
          <p className="sandwich-name">{name}</p>
          <p className="kcal">{kcal} kcal</p>
        </Sandwich>
      );
    });

  return (
    <OrderSection>
      <Dialogs>
        {CurMessage && <StaffDialog message={CurMessage} />}
        {sandwichData.length && <SandwichItem>{sandwichElements}</SandwichItem>}
        <UserDialog message={userMessage} />
      </Dialogs>
      <button onClick={countIdx}>다음</button>
    </OrderSection>
  );
}
