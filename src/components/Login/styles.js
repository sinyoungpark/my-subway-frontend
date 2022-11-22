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
  width : 100%;
  height: 100%;
  .signup_btn {
    padding: 0.8rem 4rem;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-out;
    border-radius: 30px;

    &:hover {
      color: #009132;
      background-color: white;
    }
  }

  .login_btn {
    padding: 0.8rem 4rem;
    color: #009132;
    background-color: transparent;
    border: 1px solid #009132;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-out;
    border-radius: 30px;

    &:hover {
      color: white;
      background-color: #009132;
    
  }
`;

export const Subtext = styled.p`
  font-size: 20px;
  text-align : center;
  padding: 1.3rem;
  color: rgba(255,255,255, 0.9);
  width: 30rem;
`;

export const Form = styled.form`
  width: 28rem;

  label {
    display: none;
  }

  a {
    padding-top: 10px;
    font-family: var(--font-nanum);
    text-align: right;
    display: inline-block;
    width: 30%;
    color: var(--color-grey-2);

    &.login{
      color : #fff;
    }
  }

  @media screen and (max-width : 600px){
    width : 80%
  }
`;

export const SubmitBtn = styled.input`
  margin: 30px 0;
  padding: 1rem;
  background-color: #009132;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  width: 100%;
  &:hover {
    background-color: #00a53a;
  }
`;

export const UserInput = styled.input`
  height: 55px;
  margin-bottom: 10px;
  outline: none;
  border: var(--color-grey-1) 1px solid;
  padding-left: 40px;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;

  &:focus {
    border-color: var(--color-green-1);
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

  @media screen and (max-width : 600px){
    flex-basis : 100%;
  }
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
  font-size: 32px;
  .icon {
    margin-right: 10px;
  }
`;

export const Logo = styled.h1`
  position: absolute;
  font-family: var(--font-logo);
  font-size: 2rem;
  padding: 3rem;
  a {
    color: #000;
  }
  span:nth-child(2) {
    color: var(--color-yellow-1);
  }
  span:nth-child(3) {
    color: var(--color-green-1);
  }

  @media screen and (max-width : 600px){
    padding : 20px;
  }
`;

export const Error = styled.span`
  display: inline-block;
  font-size: 15px;
  font-family: var(--font-nanum);
  width : 70%;
  text-align : left;

  &.login-error{
    color: red;
  }

  &.signup-error{
    color : var(--color-yellow);
  }
`;
