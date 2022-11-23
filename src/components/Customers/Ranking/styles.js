import styled from "styled-components";

export const RankingSection = styled.section`
  padding: 4rem 70px;
  grid-area: c;
  margin-bottom: 100px;
  font-family: var(--font-primary);

  ul.rankings{
    height : 550px;
    overflow : hidden;
    overflow-y : visible;
  }

  @media screen and (max-width: 600px) {
    padding : 0;
    padding-top : 70px;
    .only-desktop {
      display: none;
    }
    ul.rankings{
      display : flex;
      flex-wrap : wrap;
      justify-content : space-between;
      padding : 0 13px;
      height : max-content;
    }
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .board-link-btn {
    background-color: var(--color-green-1);
    color: white;
    padding: 10px 1rem;
    border-radius: 20px;
  }
`;

export const MainTlt = styled.h1`
  color: var(--color-green-1);

  .star-icon {
    color: var(--color-yellow-1);
    margin-right: 10px;
  }

  font-size: 35px;
  margin: 30px 0;

  @media screen and (max-width : 600px){
    text-align : center;
    width : 100%;
    margin : 0;
    padding : 20px 0;
  }
`;
