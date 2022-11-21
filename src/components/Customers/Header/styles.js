import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: a;
  height: 100vh;
  font-family: var(--font-primary);
  border-right: 1px solid var(--color-grey-1);
  position: fixed;
  top: 0;
  background-color: #fff;
  padding: 0 60px;
  z-index: 99;
`;

export const Profile = styled.div`
  flex-direction: column;
  text-align: center;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  p.username {
    font-size: 24px;
    margin-top: 10px;
  }

  p.email {
    font-size: 18px;
    color: var(--color-grey-1);
  }
`;

export const Nav = styled.nav`
  margin: 5rem 0;
  font-size: 18px;

  #gnb {
    > li {
      margin-top: 2.5rem;
      a {
        color: #000;
      }

      &:hover {
        cursor: pointer;
        color: var(--color-green-1);

        a {
          color: var(--color-green-1);
        }
      }

      .gnb-sub-wrap {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-in;
        font-family: var(--font-nanum);
        font-size: 1rem;

        li {
          margin: 1rem 0;

          a {
            color: var(--color-grey-2);
          }

          &:hover {
            a {
              color: var(--color-green-1);
              text-decoration-line: underline;
            }
          }
        }
      }
    }

    .active {
      .gnb-sub-wrap {
        border-top: 1px solid var(--color-grey-1);
      }
    }
  }
`;
