import styled from "styled-components";

export const BoardSection = styled.section`
  padding: 1rem 70px;
  grid-area: c;
  margin-bottom: 100px;
  font-family: var(--font-primary);
`;

export const Selection = styled.section`
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
`;

export const TextArea = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-grey-1);
  height: 300px;
`;
