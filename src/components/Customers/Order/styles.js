import styled from "styled-components";

export const OrderSection = styled.section`
  padding: 1rem 70px;
  grid-area: c;
  margin-bottom: 100px;
  background: var(--color-grey-1);
  overflow: hidden;
`;

export const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
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
  p {
    background-color: #fff;
    display: inline-block;
    padding: 10px;
  }
`;

export const SandwichItem = styled.ul`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  width: max-content;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 3rem;
  overflow-x: scroll;
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
