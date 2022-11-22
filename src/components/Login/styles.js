import styled from "styled-components";

export const LoginSection = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  font-family: var(--font-primary);

  .only-mobile {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .only-desktop {
      display: none;
    }
    .only-mobile{
      display : inline-block;
    }
  }
`;

export const Contents = styled.div`
  display: flex;
  height: 100%;
  .signup_btn {
    padding: 0.8rem 4rem;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-out;

    &:hover {
      color: #009132;
      background-color: white;
    }
  }
`;

export const Subtext = styled.p`
  font-size: 18px;
  padding: 1.3rem;
  color: rgba(0, 0, 0, 0.8);
  width: 30rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 30rem;

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    height: 2.5rem;
    margin: 10px 0 20px 0;
    outline: none;
    border: var(--color-grey-1) 1px solid;
    padding-left: 10px;
    border-radius: 3px;
  }

  input[type="submit"] {
    margin: 30px 0;
    padding: 1rem;
    background-color: #009132;
    border: 1px solid white;
    border-radius: 3px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: #00a53a;
    }
  }
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 70%;
  background-color: white;
  color: black;
  text-align: center;
`;

export const RightSection = styled.section`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #009132;
  color: white;
`;

export const MainText = styled.p`
  font-size: 24px;
`;

export const Logo = styled.h1`
  position: absolute;
  font-family: var(--font-logo);
  font-size: 2.5rem;
  padding: 3rem;
  span:nth-child(2) {
    color: var(--color-yellow-1);
  }
  span:nth-child(3) {
    color: var(--color-green-1);
  }
`;
