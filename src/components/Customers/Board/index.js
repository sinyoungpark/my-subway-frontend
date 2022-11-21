import React, { useContext, useEffect, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import axios from "axios";
import { UserContext } from "../../../App";
import {
  BoardSection,
  RichText,
  Selection,
  TextArea,
  TextFormat,
} from "./styles";

export default function Board() {
  const [user] = useContext(UserContext);
  const baseUrl = "http://localhost:8000";
  const [sandwichData, setSandwichData] = useState([]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [sendData, setSendData] = useState({
    menuId: "",
    ingredientId: [],
    title: "",
  });
  const [p, setP] = useState([{ data: "" }]);
  const [focus, setFocus] = useState(0);
  const [textValue, setTextValue] = useState("");

  const config = {
    headers: {
      authorization: `Bearer ${user.accesstoken}`,
    },
  };

  useEffect(() => {
    getSandwichData();
    getIngredientData();
  }, []);

  const getSandwichData = () => {
    axios
      .get(`${baseUrl}/menu/sandwich`)
      .then((res) => res.data)
      .then((data) => {
        setSandwichData(data.sandwichData);
      })
      .catch((err) => console.log(err));
  };

  const getIngredientData = () => {
    axios
      .get(`${baseUrl}/menu/ingredients`)
      .then((res) => res.data)
      .then((data) => {
        setIngredientsData(data.ingredientsData);
      })
      .catch((err) => console.log(err));
  };

  const dataFormatHandler = {
    bold: (e) => {
      e.preventDefault();
      const selection = window.getSelection();
      console.log(selection);
    },
  };

  const createPelement = (e) => {
    setP([
      ...p,
      {
        data: "",
      },
    ]);
    console.log(p);
  };

  const enterkey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setP([
        ...p,
        {
          data: "",
        },
      ]);
    }
  };

  const sendRecipe = (e) => {
    e.preventDefault();
    console.log(user, config);
    axios
      .post(`${baseUrl}/recipes`, sendData, config)
      .then((res) => res.data)
      .then((data) => {
        alert(data.data);
      });
  };

  return (
    <BoardSection>
      <h1>나의 레시피</h1>
      <Selection>
        <div className="select-group">
          <label htmlFor="menu">1. 메뉴를 선택해주세요</label>
          <select
            name="menuId"
            id="menu"
            onChange={(e) => {
              setSendData({
                ...sendData,
                menuId: e.currentTarget.value,
              });
            }}
          >
            {sandwichData &&
              sandwichData.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="bread">2.빵을 선택해주세요.</label>
          <select name="bread" id="bread">
            {/* {
              ingredientsData && ingredientsData.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)
            } */}
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="ingredients">3. 야채 선택</label>
          <div id="toppings" className="checkbox">
            {ingredientsData &&
              ingredientsData.map((item) => (
                <>
                  <input
                    type="checkbox"
                    value={item.id}
                    name=""
                    id={item.name}
                    onClick={(e) => {
                      if (e.currentTarget.checked) {
                        setSendData({
                          ...sendData,
                          ingredientId: [
                            ...sendData.ingredientId,
                            e.currentTarget.value,
                          ],
                        });
                      } else {
                        const sendIngredients = sendData.ingredientId.filter(
                          (item) => item !== e.currentTarget.value
                        );

                        setSendData({
                          ...sendData,
                          ingredientId: sendIngredients,
                        });
                      }
                    }}
                  />
                  <label htmlFor={item.name}>{item.name}</label>
                </>
              ))}
          </div>
        </div>

        <div className="select-group">
          <label htmlFor="sauce">5. 소스 선택(최대 3개)</label>
          <div id="sauce" className="checkbox">
            <input type="checkbox" name="" id="에그마요" />
            <label htmlFor="에그마요">에그마요</label>
            <input type="checkbox" name="" id="에그마요" />
            <label htmlFor="에그마요">에그마요</label>
            <input type="checkbox" name="" id="에그마요" />
            <label htmlFor="에그마요">에그마요</label>
            <input type="checkbox" name="" id="에그마요" />
            <label htmlFor="에그마요">에그마요</label>
          </div>
        </div>
      </Selection>
      <button onClick={(e) => sendRecipe(e)}>저장하기</button>
      <RichText>
        <h1
          contentEditable={true}
          className="title"
          placeholder="title"
          onInput={(e) => {
            e.preventDefault();
            setSendData({
              ...sendData,
              title: e.currentTarget.textContent,
            });
          }}
        ></h1>
        <TextFormat>
          <button
            className="text-format-btn"
            data-name="bold"
            onClick={(e) => dataFormatHandler.bold(e)}
          >
            <FormatBoldIcon />
          </button>
          <button className="text-format-btn">
            <FormatItalicIcon />
          </button>
          <button className="text-format-btn">
            <FormatUnderlinedIcon />
          </button>
          <button className="text-format-btn">
            <FormatStrikethroughIcon />
          </button>
          <select name="text-level" id="text-level">
            <option value="p">Normal</option>
            <option value="h1">H1</option>
            <option value="h2">H2</option>
            <option value="h3">H3</option>
          </select>
          <select name="font-size" id="font-size">
            <option value={18}>18px</option>
            <option value={24}>24px</option>
            <option value={36}>36px</option>
          </select>
          <select name="font-family" id="font-family">
            <option value={18}>Roboto</option>
            <option value={24}>Noto Sans Korean</option>
            <option value={36}>36px</option>
          </select>
          <button className="text-align">
            <FormatAlignLeftIcon />
          </button>
          <button className="text-align">
            <FormatAlignCenterIcon />
          </button>
          <button className="text-align">
            <FormatAlignRightIcon />
          </button>
        </TextFormat>
        <TextArea>
          {p &&
            p.map((item) => (
              <p
                onKeyDown={(e) => enterkey(e)}
                contentEditable={true}
                onMouseUp={(e) => {
                  console.log(window.getSelection());
                }}
              >
                hi!
              </p>
            ))}
        </TextArea>
      </RichText>
    </BoardSection>
  );
}
