import React, { useContext, useEffect, useRef, useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import axios from "axios";
import { RequestUrl, UserContext } from "../../../App";
import {
  BoardSection,
  RichText,
  Selection,
  TextArea,
  TextFormat,
} from "./styles";
import Paragraph from "./Paragraph";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

export default function Board() {
  const [user] = useContext(UserContext);
  const [baseUrl] = useContext(RequestUrl);
  const [sandwichData, setSandwichData] = useState([]);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [sendData, setSendData] = useState({
    menuId: "",
    ingredientId: [],
    title: "",
  });

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [textAlign, setTextAlign] = useState("left");

  const textElement = useRef(null);

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

  const formatValue = [
    {
      type: "inline",
      value: "BOLD",
      icon: "FormatBoldIcon",
    },
    {
      type: "inline",
      value: "ITALIC",
      icon: "FormatItalicIcon",
    },
    {
      type: "inline",
      value: "UNDERLINE",
      icon: "FormatUnderlinedIcon",
    },
    {
      type: "inline",
      value: "STRIKETHROUGH",
      icon: "FormatStrikethroughIcon",
    },
    {
      type: "block",
      value: "header-one",
      text: "h1",
    },
    {
      type: "block",
      value: "header-two",
      text: "h2",
    },
    {
      type: "block",
      value: "header-three",
      text: "h3",
    },
    {
      type: "block",
      value: "unordered-list-item",
      text: "ul",
    },
    {
      type: "block",
      value: "ordered-list-item",
      text: "ol",
    },
    {
      type: "align",
      value: "left",
    },
    {
      type: "align",
      value: "center",
    },
    {
      type: "align",
      value: "right",
    },
  ];

  const dataFormatHandler = {
    toggleInlineStyle: (e) => {
      e.preventDefault();
      const style = e.currentTarget.getAttribute("data-style");
      setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    },
    toggleBlockStyle: (e) => {
      e.preventDefault();
      const block = e.currentTarget.getAttribute("data-style");
      console.log(block);
      setEditorState(RichUtils.toggleBlockType(editorState, block));
    },
    setTextAlign: (e) => {
      e.preventDefault();
      const align = e.currentTarget.getAttribute("data-style");
      console.log(align);
      setTextAlign(align);
    },
  };

  const formatElements = formatValue.map((item) => {
    if (item.type === "inline") {
      return (
        <button
          className="text-format-btn"
          data-style={item.value}
          onClick={(e) => dataFormatHandler.toggleInlineStyle(e)}
        >
          {item.value === "BOLD" ? (
            <FormatBoldIcon />
          ) : item.value === "ITALIC" ? (
            <FormatItalicIcon />
          ) : item.value === "UNDERLINE" ? (
            <FormatUnderlinedIcon />
          ) : item.value === "STRIKETHROUGH" ? (
            <FormatStrikethroughIcon />
          ) : (
            false
          )}
        </button>
      );
    } else if (item.type === "block") {
      return (
        <button
          className="text-format-btn"
          data-style={item.value}
          onClick={(e) => dataFormatHandler.toggleBlockStyle(e)}
        >
          {item.text}
        </button>
      );
    }
    return (
      <button
        className="text-format-btn"
        data-style={item.value}
        onClick={(e) => dataFormatHandler.setTextAlign(e)}
      >
        {item.value === "left" ? (
          <FormatAlignLeftIcon />
        ) : item.value === "center" ? (
          <FormatAlignCenterIcon />
        ) : item.value === "right" ? (
          <FormatAlignRightIcon />
        ) : (
          false
        )}
      </button>
    );
  });

  const sendRecipe = (e) => {
    e.preventDefault();
    console.log(user, config);
    axios
      .post(`${baseUrl}/recipes`, sendData, config)
      .then((res) => res.data)
      .then((data) => {
        alert(data.data);
      })
      .error((e) => alert("입력해주세요."))
  };

  const sandwichOptions =
    sandwichData &&
    sandwichData.map((item) => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));

  const ingredientsOptions =
    ingredientsData &&
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
                ingredientId: [...sendData.ingredientId, e.currentTarget.value],
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
    ));

  /*text-editor handler */
  const focusHandler = () => {
    textElement.current.focus();
  };
  const enterHandler = (e) => {

    if (e.key === "Enter") {
      e.preventDefault();
      setParagraphs([...paragraphs, ""]);
      focusHandler();
    }
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
            {sandwichOptions}
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
            {ingredientsOptions}
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
        <TextFormat>{formatElements}</TextFormat>

        <TextArea onClick={(e) => onFocusHandler(e)}>
          <Editor
            editorState={editorState}
            onChange={setEditorState}
            ref={textElement}
            textAlignment={textAlign}
          />
        </TextArea>
      </RichText>
      <button className="submit-btn" onClick={(e) => sendRecipe(e)}>
        저장하기
      </button>
    </BoardSection>
  );
}
