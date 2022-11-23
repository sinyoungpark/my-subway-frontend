import styled from "styled-components";

export const SignupSection = styled.section`
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

export const LeftSection = styled.section`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 70%;
  background-color: #009132;
  color: white;
  @media screen and (max-width : 600px){
    flex-basis : 100%;
  }
`;

export const Subtext = styled.p`
  font-size: 20px;
  text-align : center;
  padding: 1.3rem;
  color: rgba(0,0,0, 0.9);
  width: 30rem;
`;
