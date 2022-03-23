import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: center;
  border-bottom: 1px solid white;
`

export const Content = styled.div`
  display: flex;
  width: 1120px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
export const ContentTitle = styled.div`
  text-align: end;
`;

export const Menu = styled.div`
  display: flex;
  display: none;
  font-size: 30px;

  @media(max-width: 560px) {
    display: flex;
  }
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media(max-width: 560px) {
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;

    gap: 0px;
    top: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5;

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 100px;
    }
  }
`

export const SubTitle = styled.span`
  
`;

export const CloseSideBar = styled.div`
  position: absolute;
  right: 15px;
  top: 35px;
  display: none;
  cursor: pointer;
  font-size: 30px;

  @media (max-width: 560px) {
    display: flex;
  }
`

export const Ancora = styled.a`
  font-size: 20px;
  heigth: 100px;
  transition: 0.3s;

  &.active {
    background-color: black;
  }

  @media(max-width: 560px) {
    display: flex;
    align-items: center;
    padding: 0px 10px;
  }
`
