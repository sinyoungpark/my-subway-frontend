import React, { useEffect, useState } from "react";

export default function SlideCard({adData}){
  console.log(adData.img);
  return(
    <li>
      <img src={adData.img} alt="" className="ad-img" />
    </li>
  )
}
