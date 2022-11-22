import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding-bottom: 25px;

  display: grid;
  grid-template-rows: 0% 100% 0px;
  grid-template-columns: 20% 80%;
  grid-template-areas:
    "a b b"
    "a c c"
    "a d d";

  @media screen and (max-width: 600px) {
    display : block;
  }
`;

export const Footer = styled.footer`
  grid-area: d;
  font-family: var(--font-primary);
  display: flex;
  align-items: center;
  margin: 0 5rem 0;
  justify-content: space-between;
  .copyright {
    margin: 0 5rem;
  }

  @media screen and (max-width : 600px){
    width  :100%;
    margin : 0;
    padding : 0 1rem;
  }

`;
export const Sns = styled.ul`
  display: flex;
  li {
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin-left: 1rem;
    cursor: pointer;

    &:hover {
      background: #000;
    }
    .sns-icon {
      font-size: 26px;
      &:hover {
        color: white;
      }
    }
  }
`;

export const Logo = styled.h1`
  font-family: var(--font-logo);
  font-size: 2.5rem;
  padding: 3rem 0;
  span:nth-child(2) {
    color: var(--color-yellow-1);
  }

  span:nth-child(3) {
    color: var(--color-green-1);
  }

  a {
    color: #000;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
    text-align: center;
    padding: 0;
  }
`;

export const FootLogo = styled.h2`
  font-size: 18px;
  font-family: var(--font-logo);
  span:nth-child(2) {
    color: var(--color-yellow-1);
  }
  span:nth-child(3) {
    color: var(--color-green-1);
  }
`;

export const LogoutBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-family: var(--font-primary);
  cursor: pointer;
  font-size: 1rem;
  display : flex;
  align-items: center;

  .logout-btn{
    margin-right: 10px;
  }
  &:hover {
    color : red;
  }

  @media screen and (max-width : 600px){
    position : absolute;
    right : 20px;
  }
`;
