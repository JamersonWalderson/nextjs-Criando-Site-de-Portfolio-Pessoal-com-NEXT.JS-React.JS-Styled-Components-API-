import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  // background-color: red;
`
export const Content = styled.div`

  display: flex;
  width: 1120px;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 20px;

  @media(max-width: 600px) {
    padding: 5px;
  }

  @media(max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
  
`
export const Infos = styled.div`
  display: grid;
  width: 50%;
  text-align: start;

  @media(max-width: 760px) {
    width: 90%;
  }
  
`
export const Logo = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
    height: 25rem;
  }

  @media(max-width: 760px) {
    width: 90%
  }

  @media (max-width: 600px) {

    img {
      width: 18rem;
      height: 18rem;
    }
  }
  
`
export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;

  @media(max-width: 760px) {
    font-size: 25px;
  }
`
export const Function = styled.span`
  color: lightgray;
  margin-bottom: 10px;
`
export const Intro = styled.span``

export const Img = styled.img``

export const LinkProjects = styled.button`
width: 10rem;
padding: 10px;
display: flex;
justify-content: space-around;
margin-top: 20px;
font-weight: bold;

svg {
  font-size: 20px;
}
`