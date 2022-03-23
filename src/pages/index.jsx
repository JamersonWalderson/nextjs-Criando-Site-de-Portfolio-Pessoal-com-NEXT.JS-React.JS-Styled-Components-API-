import Head from 'next/head'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { 
  Container,
  Content,
  Infos,
  Logo,
  Img,
  Name,
  Function,
  Intro,
  LinkProjects
 } from '../../styles/indexStyles'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Jamerson Walderson</Name>
          <Function>Fullstack developer</Function>
          <Intro>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias magnam quibusdam ullam, maxime omnis saepe. Accusamus ad dicta, vel aut praesentium ipsum ducimus, debitis laborum autem aperiam alias at tenetur?
          </Intro>
          <Link href='projects'>
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt='logo' />
        </Logo>
      </Content>
    </Container>
  )
}
