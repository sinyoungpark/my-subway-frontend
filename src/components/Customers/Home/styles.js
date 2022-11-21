import styled from "styled-components";

export const HomeSection = styled.section`
  padding: 1rem 70px;
  grid-area: c;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  grid-template-areas:
    "a a a"
    "b b c"
    "b b c";
  font-family: var(--font-primary);
`;

export const Recipes = styled.section`
  grid-area: a;
  box-shadow: 1px 0.1rem 1rem rgb(0 0 0 / 20%);
  border-radius: 20px;
  margin-bottom: 0px;
  height: 350px;
  overflow: hidden;
  overflow-x: visible;

  ul.recipes {
    display: flex;
    flex-wrap: nowrap;
    width: max-content;

    .recipe {
      border: 1px solid var(--color-yellow-1);
      border-radius: 10px;
      height: 230px;
      padding-top: 7px;
      width: 200px;
      text-align: center;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
      justify-content: center;

      p.menu-name {
        overflow: hidden;
      }

      img.menu-img {
        width: 150px;
        height: 90px;
      }

      ul.ingredients {
        display: flex;
        justify-content: center;
        align-items: center;

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

      p.likes {
        display: flex;
        align-items: center;
        padding: 7px;

        .likes-icon {
          color: var(--color-yellow-1);
          font-size: 20px;
          margin-right: 10px;
        }

        font-size: 14px;
        cursor: pointer;

        &:hover {
          border: 2px solid var(--color-green-1);
          border-radius: 20px;
        }
      }

      .container {
        .circles {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }
          span {
            display: inline-block;
            width: 5px;
            height: 5px;
            background-color: var(--color-grey-2);
            border-radius: 50%;
            margin-bottom: 1px;
          }
        }
        .delete-btn {
          position: absolute;
          top: 50px;
          border: none;
          box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.3);
          background-color: #fff;
          align-items: center;
          width: 100px;
          height: 30px;
          justify-content: space-around;
          border-radius: 4px;
          cursor: pointer;
          display: none;
        }
        .delete-btn.active {
          display: flex;
        }
      }
    }
  }
`;

export const Subtlt = styled.h2`
  font-size: 1.2rem;
  padding: 2rem;
`;

export const Rankings = styled.section`
  grid-area: b;
  box-shadow: 1px 0.1rem 1rem rgb(0 0 0 / 20%);
  border-radius: 20px;

  ul.rankings {
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
  }
`;

export const Ads = styled.section`
  grid-area: c;
  box-shadow: 1px 0.1rem 1rem rgb(0 0 0 / 20%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const Slides = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Slide = styled.li`
  width: 100%;
  height: 100%;
  padding-top: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const Circles = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: flex-end;
  padding-bottom: 1.3rem;
  position: absolute;

  li {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-left: 1rem;
    border: 1px solid var(--color-green-1);
  }

  li.active {
    background-color: var(--color-green-1);
  }

  li:nth-child(1) {
    display: none;
  }

  li:last-child {
    display: none;
  }
`;
