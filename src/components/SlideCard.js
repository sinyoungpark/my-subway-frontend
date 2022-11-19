import React from "react";

const SlideCard = React.forwardRef(({adData}, ref) => {
  return (
  <li ref={ref}>
  <img src={adData.img} alt="" className="ad-img" />
</li>
)})

export default SlideCard;