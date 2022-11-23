import styled from "styled-components";

export const BoardSection = styled.section`
  padding: 4rem 70px;
  grid-area: c;
  margin-bottom: 100px;
  font-family: var(--font-primary);

  .submit-btn {
    background-color: var(--color-green-1);
    color: white;
    padding: 10px 1rem;
    border-radius: 20px;
    outline : none;
    border : none;
    font-family: var(--font-primary);
    margin-top : 1rem;
    font-size : 18px;
    cursor : pointer;
  }

  @media screen and (max-width : 600px){
    padding : 90px 30px 0 30px;
    h1{
      text-align : center;
    }
  }
`;

export const Selection = styled.section`
  padding : 2rem 0;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .select-group {
    flex-basis: 40%;

    select {
      display: block;
      margin: 10px 0;
      width: 150px;
      padding: 4px 0;
    }

    .checkbox {
      margin: 10px 0;

      input[type="checkbox"] {
        margin-left: 10px;
        margin-right: 5px;
      }
    }
  }

  @media screen and (max-width : 600px){
    hegiht : max-content;
    flex-direction : row;
    justify-content : space-between;
    .select-group{
      margin-bottom : 20px;
    }
  }
`;

export const RichText = styled.section`
  font-family: var(--font-nanum);
  width: 50%;

  h1 {
    color: #000;
    border: 1px solid #000;
    padding: 5px;
    font-size: 20px;
    margin-top: 0;
  }

  @media screen and (max-width : 600px){
    width : 100%;
    margin-top : 20px;
  }
`;

export const TextFormat = styled.div`
  background-color: var(--color-grey-1);
  display: flex;
  padding: 10px;

  .text-format-btn,
  .text-align {
    margin-right: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  select {
    margin: 0 5px;
    border-radius: 3px;
  }

  @media screen and (max-width : 600px){
    flex-wrap : wrap;
  }
`;

export const TextArea = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-grey-1);
  height: 300px;
  cursor : input;
`;

export const UserText = styled.p`
  outline : none;
`
