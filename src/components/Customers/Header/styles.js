import styled from "styled-components";

export const HeaderContainer = styled.div`
  .only-mobile {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .only-desktop {
      display: none;
    }
    .only-mobile {
      display: flex;
    }
  }
`;

export const DesktopHeader = styled.header`
  grid-area: a;
  height: 100vh;
  font-family: var(--font-primary);
  border-right: 1px solid var(--color-grey-1);
  position: fixed;
  top: 0;
  background-color: #fff;
  padding: 0 50px;
  z-index: 99;
`;

export const MobileHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  position : fixed;
`;

export const Hamburger = styled.div`
  position: absolute;
  cursor: pointer;
  left: 20px;
  display: flex;
  width: 32px;
  height: 30px;
  flex-direction: column;
  justify-content: space-between;
  span {
    display: inline-block;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: var(--color-green-1);
    transition: transform 0.3s;
  }

  &.open {
    span:nth-child(1) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    span:nth-child(2) {
      display: none;
    }
    span:nth-child(3) {
      position: absolute;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
    }
  }
`;

export const MobileNav = styled.nav``;

export const ProfileImg = styled.div`
  border: 1px solid var(--color-green-1);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 2px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Profile = styled.div`
  flex-direction: column;
  text-align: center;
  display: flex;
  align-items: center;

  p.username {
    font-size: 24px;
    margin-top: 10px;
  }

  p.email {
    font-size: 18px;
    color: var(--color-grey-1);
  }
`;

export const Gnb = styled.ul``;

export const Nav = styled.nav`
  margin: 5rem 0;
  font-size: 20px;

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

  @media screen and (max-width: 600px) {
    background-color: #fff;
    margin: 0;
    position: absolute;
    top: 70px;
    width: 100%;
    z-index: 99;
    height: 100vh;
    display: none;
    &.open {
      display: block;
    }

    #gnb {
      padding: 20px 30px;
      font-size: 24px;
      > li {
        margin-top: 50px;
        .gnb-sub-wrap {
          font-size: 18px;
        }
      }
    }
  }
`;
