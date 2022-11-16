import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import "../styles/Board.scss";

export default function Board() {
  const [p, setP] = useState([{ data: "" }]);
  const [focus, setFocus] = useState(0);
  const [textValue, setTextValue] = useState("");

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

  return (
    <section id="board" className="section inner">
      <h1>나의 레시피</h1>
      <section className="selection">
        <div className="select-group">
          <label htmlFor="menu">1. 메뉴를 선택해주세요</label>
          <select name="menuId" id="menu">
            <option value="1">스파이시 바비큐</option>
            <option value="2">스파이시 바비큐</option>
            <option value="3">스파이시 바비큐</option>
            <option value="4">스파이시 바비큐</option>
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="bread">2.빵을 선택해주세요.</label>
          <select name="bread" id="bread">
            <option value="1">허니오트</option>
            <option value="2">양상추</option>
          </select>
        </div>

        <div className="select-group">
          <label htmlFor="ingredients">3. 야채 선택</label>
          <div id="toppings" className="checkbox">
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
      </section>

      <section className="rich-text">
        <h1 contentEditable={true} className="title" placeholder="title"></h1>
        <div className="text-format">
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
        </div>
        <div className="text-area">
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
        </div>
      </section>
    </section>
  );
}
