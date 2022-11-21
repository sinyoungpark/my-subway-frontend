import React from "react";
import { Slide } from "./styles";

const SlideCard = React.forwardRef(({ adData }, ref) => {
  return (
    <Slide ref={ref}>
      {
        console.log(adData)
      }
      <img src={adData.img} alt="" className="ad-img" />
    </Slide>
  );
});

export default SlideCard;
