import React, { useContext, useEffect, useState } from "react";
import UserDialog from "./UserDialog";
import StaffDialog from "./StaffDialog";
import axios from "axios";
import {
  Dialogs,
  OrderSection,
  SandwichItem,
  Sandwich,
  Chatbox,
  ChatHeader,
  Profile,
} from "./styles";
import { RequestUrl, UserContext } from "../../../App";
import profileImg from "../../../img/user-profile.jpg";

export default function Order() {
  const [user] = useContext(UserContext);
  const [baseUrl] = useContext(RequestUrl);
  const [curIdx, setCurIdx] = useState(0);
  const [sandwichData, setSandwichData] = useState([]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [messages, setMessages] = useState([
    {
      type: "staff",
      text: "안녕하세요, 서브웨이입니다.",
    },
  ]);

  useEffect(() => {
    getSandwichData();
    getIngredients();
  }, []);

  useEffect(() => {
    makeDialogs();
  }, [curIdx]);

  const countIdx = () => {
    setCurIdx(curIdx + 1);
  };

  const time = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  };

  const ingredientsElements =
    ingredientsData &&
    ingredientsData.map((item, idx) => {
      const { name, kcal, img, Type } = item;
      return (
        <Sandwich key={idx} onClick={(e) => selectSandwich(e)} data-name={name}>
          <img src={img} alt="" className="sandwich-img" />
          <p className="sandwich-name">{name}</p>
          <p className="kcal">{kcal} kcal</p>
        </Sandwich>
      );
    });

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

  const selectSandwich = async (e) => {
    const sandwich = e.currentTarget.dataset.name;
    await time(2000);
    setMessages([
      ...messages,
      {
        type: "user",
        text: sandwich,
      },
    ]);

    if (curIdx === 1 || curIdx === 3) {
      countIdx();
    }
  };

  const dialogsEle =
    messages &&
    messages.map((item, idx) => {
      console.log(idx, item);
      if (item.type === "staff") {
        if (idx === 1) {
          return (
            <>
              <StaffDialog message={item.text} />
              <SandwichItem> {sandwichElements}</SandwichItem>
            </>
          );
        } else if (idx === 3) {
          return (
            <>
              <StaffDialog message={item.text} />
              <SandwichItem> {ingredientsElements}</SandwichItem>
            </>
          );
        }
        return <StaffDialog message={item.text} />;
      } else if (item.type === "user") {
        return <UserDialog message={item.text} />;
      }
    });

  const makeDialogs = async () => {
    if (curIdx === 0) {
      await time(2000);
      setMessages([
        ...messages,
        {
          type: "staff",
          text: "원하시는 메뉴를 선택해주세요",
        },
      ]);
      countIdx();
    } else if (curIdx === 2) {
      await time(2000);
      setMessages([
        ...messages,
        {
          type: "staff",
          text: "원하시는 재료를 선택해주세요",
        },
      ]);
      countIdx();
    } else if (curIdx === 4) {
      await time(2000);
      setMessages([
        ...messages,
        {
          type: "staff",
          text: "주문이 완료되었습니다.",
        },
      ]);
      countIdx();
    }
  };

  const getSandwichData = () => {
    axios
      .get(`${baseUrl}/menu/sandwich`)
      .then((res) => res.data)
      .then((data) => {
        setSandwichData(data.sandwichData);
      })
      .catch((err) => console.log(err));
  };

  const getIngredients = () => {
    axios
      .get(`${baseUrl}/menu/ingredients`)
      .then((res) => res.data)
      .then((data) => {
        setIngredientsData(data.ingredientsData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <OrderSection>
      <Chatbox>
        <ChatHeader>
          <Profile>
            <img src={profileImg} alt="user-profile" />
            <p className="username">{user.name}</p>
          </Profile>
        </ChatHeader>
        <Dialogs>{dialogsEle}</Dialogs>
      </Chatbox>
    </OrderSection>
  );
}
