import styled from "styled-components";

export const RankingSection = styled.section`
  padding: 1rem 70px;
  grid-area: c;
  margin-bottom: 100px;
  font-family: var(--font-primary);
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--color-green-1);

    .star-icon {
      color: var(--color-yellow-1);
      margin-right: 10px;
    }

    font-size: 35px;
    margin: 30px 0;
  }

  .board-link-btn {
    background-color: var(--color-green-1);
    color: white;
    padding: 10px 1rem;
    border-radius: 20px;
  }
`;

export const RankingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 35rem;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 13px;

  li.item:first-child {
    background-color: var(--color-yellow-1);

    .num {
      background-color: #ffbb0d;
      color: #fff;
    }

    p.likes {
      border-color: white;
    }
  }

  li.item {
    display: flex;
    align-items: center;
    border: 1px solid var(--color-yellow-1);
    border-radius: 10px;
    height: 100px;
    margin-bottom: 1rem;
    width: 100%;
    overflow: hidden;

    .num {
      font-size: 24px;
      width: 80px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p.recipe-name {
      font-size: 0.8rem;
      width: 130px;
      padding: 0 10px;
      margin-left: 10px;
    }

    img.menu-img {
      width: 130px;
      height: 70px;
    }

    ul.ingredients {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-left: 50px;

      li:first-child::before {
        content: "x";
        position: absolute;
        font-size: 36px;
        left: -40px;
      }

      li {
        margin: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-size: 0.8rem;
        justify-content: center;
        align-items: center;

        img {
          width: 60px;
        }
      }
    }

    div.writer-profile {
      width: 200px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }

    p.likes {
      border: 1px solid var(--color-yellow-1);
      border-radius: 20px;
      padding: 4px 10px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .likes-icon {
        color: var(--color-yellow-1);
        margin-right: 10px;
      }
    }
  }
`;
