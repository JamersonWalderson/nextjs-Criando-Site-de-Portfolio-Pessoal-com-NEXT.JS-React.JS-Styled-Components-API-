import React, { useState } from "react";
import { FaBars, FaTimes} from 'react-icons/fa';
import Link from 'next/Link';
import {
  Container,
  Content,
  ContentTitle,
  Title,
  SubTitle,
  Menu,
  NavLinks,
  CloseSideBar,
  Ancora
} from "./style";
import { useRouter } from "next/router";

export default function Header() {

  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  const activeLink = (path) => {
    return asPath === `/${path}` ? 'active' : '';
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>Jamerson Walderson</Title>
          <SubTitle>Portifólio Pessoal</SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSidebar} />
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSideBar onClick={showSidebar}><FaTimes /></CloseSideBar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSidebar}>Home</Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink('projects')} onClick={showSidebar}>Projetos</Ancora>
          </Link>
          <Link href="contact">
            <Ancora className={activeLink('contact')} onClick={showSidebar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  )
}