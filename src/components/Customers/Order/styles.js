import styled from "styled-components";

export const OrderSection = styled.section`
  padding: 1rem 70px;
  grid-area: c;
  margin-bottom: 50px;
  display : flex;
  justify-content : center;
  overflow : hidden;

  @media screen and (max-width: 600px) {
    padding: 0;
    padding-top : 100px;
  }
`;

export const Chatbox = styled.div`
  background-color : #fff;
  width  :50%;
  border-radius : 20px;
  box-shadow: 1px 0.1rem 1rem rgb(0 0 0 / 20%);
  height : 80vh;
  overflow: hidden;
  overflow-y: visible;

  @media screen and (max-width: 600px) {
    width : 100%;
    border-radius : 0px;
    box-shadow : none;
    height : max-content;
    overflow : hidden;
  }
`

export const Profile = styled.div`
display : flex;
align-items: center;
padding-left  :30px;
height : 100%;
color : #fff;
  img{
    width : 50px;
    height: 50px;
    border-radius : 50%;
    border : 2px solid #fff;
    margin-right  :10px;
  }
`

export const ChatHeader = styled.div`
  background-color : var(--color-green-1);
  height : 70px;
  border-radius : 20px 20px 0 0;
`

export const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  padding  :10px;
  height : max-content;
  flex-wrap : nowrap;
  overflow : hidden;
  overflow-y:visible;
`;

export const Staff = styled.div`
  color: #fff;
  padding: 10px;
  text-align: right;
  p {
    background-color: var(--color-green-1);
    display: inline-block;
    padding: 10px;
  }
`;

export const User = styled.div`
  text-align: left;
  padding: 10px;
  margin : 10px;
  p {
    background-color: #fff;
    border : 1px solid var(--color-green-1);
    display: inline-block;
    padding: 10px;
  }
`;

export const SandwichItem = styled.ul`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  width  : 100%;
  overflow : hidden;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 3rem;
  height : max-content;
  overflow-x : visible;
`;

export const Sandwich = styled.li`
  cursor: pointer;
  box-shadow: 0px 6px 18px -4px rgba(0, 0, 0, 0.25);
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  margin-left: 1rem;
  padding-bottom: 2rem;
  height : 170px;

  &:hover {
    background-color: var(--color-green-1);
    color: white;
  }

  .sandwich-img {
    width: 150px;
  }
  .sandwich-name {
    font-size: 14px;
  }
  .kcal {
    padding-top: 5px;
    font-size: 13px;
    color: var(--color-yellow-1);
  }
`;
