import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100vw;
  position: fixed;
  background-color: #1e1f2b;
  z-index: 10;
  /* top:30px; */
`;

export const NavWrapper = styled.div`
  display: flex;
  padding: 25px 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const MobileTitle = styled.div`
  display: none;
  @media (width <= 954px) {
    display: flex;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export const NavOption = styled.div<{ $isShow: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (width <= 954px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 16px 0 24px 0;
    overflow: hidden;
    position: absolute;
    background-color: #ffffff;
    height: 100vh;
    width: 250px;
    top: 0;
    transition: all 0.4s ease-in-out;
    left: ${(props) => (props.$isShow ? '-16px' : '-800px')};
    z-index: 20;
  }
  @media (width >= 768px) {
    left: ${(props) => (props.$isShow ? '-100px' : '-800px')};
  }
  a {
    padding: 11px 0 0 16px;
    display: block;
    text-decoration: none;
    @media (width >= 954px) {
      padding: 0;
    }
  }
`;

export const Overlay = styled.div<{ visible: boolean }>`
  display: none;
  @media (width <= 954px) {
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1e1f2b;
    z-index: 15;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  @media (width <= 954px) {
    flex-direction: column;
    align-items: baseline;
    margin: 20px 0 18px 0;
    width: 100%;
  }
`;

export const ListItem = styled.li<{ $isSelect: boolean }>`
  margin: 0 16px;
  @media (width <= 954px) {
    margin: 0px;
    width: 100%;
  }
  a {
    font-size: 16px;
    font-family: Inter, sans-serif;
    color: ${(param) => (param.$isSelect ? '#CDFFF3' : '#8FA0AD')};
    text-decoration: none;
    font-weight: ${(param) => (param.$isSelect ? '700' : '400')};
    &:hover {
      color: CDFFF3;
      text-decoration: none;
      font-weight: ${(param) => (param.$isSelect ? '700' : '400')};
    }
    @media (width <= 954px) {
      display: block;
      width: 100%;
      padding: 8px 0 8px 16px;
      color: #383838;
      background-color: ${(props) => (props.$isSelect ? '#CDFFF3' : '')};
      &:hover {
        background-color: ${(param) => (param.$isSelect == true ? '#CDFFF3' : '#F2F1F1')};
        text-decoration: none;
        font-weight: ${(param) => (param.$isSelect ? '700' : '400')};
      }
    }
  }
`;

export const Contact = styled.div<{ isSelect: boolean }>`
  a {
    height: 47px;
    font-family: Inter, sans-serif;
    font-size: 16px;
    border-radius: 10px;
    color: #fff;
    background-color: ${(props) => (props.isSelect ? '#383838' : '#2BA386')};
    text-decoration: none;
    border: 0px solid #383838;
    padding: 9px 22px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #383838;
      color: white;
      transition: 0.5s;
    }
    @media (width <= 954px) {
      margin: 0 0 0 16px;
    }
  }
`;

export const HamburgerIcon = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  transition: all 0.3s ease-in;
  @media (width <= 954px) {
    display: flex;

    &:hover {
      background-color: #c2c3c4;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.96);
    }
  }
`;

export const NavBarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  background-color: white;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 6px;
  margin-right: 20px;
`;
export const TextLogo = styled.p`
  width: 42px;
  height: 42px;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-align: center;
  margin-top: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  color: white;
  margin-left: 1rem;
  text-decoration: none;
`;
export const Logos = styled.div``;
