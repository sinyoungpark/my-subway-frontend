import styled from "styled-components";

export const MenuSection = styled.section`
  grid-area: c;
  margin-bottom: 100px;
  overflow: hidden;
  overflow-y: visible;
  font-family: var(--font-primary);

  @media screen and (max-width : 600px){
    padding-top : 4rem;
  }
`;

export const MainVisual = styled.section`
  height : 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  img {
    height : 100%;
    width : 100%;
  }

  @media screen and (max-width : 600px){
    height : 170px;
  }
`;

export const Maintlt = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: #fff;
  p {
    font-size: 18px;
  }

  @media screen and (max-width : 600px){
    font-size : 28px;
    p{
      font-size : 12px;
    }
  }
`;

export const Inner = styled.section`
  padding: 1rem 70px;
  @media screen and (max-width : 600px){
    padding : 0;
  }
`;

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  height : 500px;
  overflow : hidden;
  overflow-y : visible;

  @media screen and (max-width : 600px){
    height : max-content;
    margin-top : 10px;
    padding : 0 20px;
    justify-content:  space-between;
  }
`;

export const Item = styled.li`
  box-shadow: 0px 6px 18px -4px rgba(0, 0, 0, 0.25);
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  height : 250px;
  margin-left : 15px;

  .item-img {
    width: 230px;
    height: 170px;
  }
  .item-name {
    font-size: 20px;
  }
  .kcal {
    padding-top: 5px;
    font-size: 18px;
    color: var(--color-yellow-1);
  }

  @media screen and (max-width : 600px){
    flex-basis : 43%;
    .item-img{
      width  :180px;
      height : 140px;
    }
  }
`;

export const Category = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width : 600px){
    justify-content : center;
    padding : 30px 0;
  }
`;
