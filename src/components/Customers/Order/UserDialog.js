import React from "react";
import { User } from "./styles";

export default function UserDialog({message}){
  return(
    <User><p>{message}</p></User>
  )
}