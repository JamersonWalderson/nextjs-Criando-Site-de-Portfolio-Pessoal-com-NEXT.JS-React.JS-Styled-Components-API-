import Head from 'next/head'
import { 
  Container,
  Content,
  Infos,
  Logo,
  Img
 } from '../../styles/indexStyles'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum repellendus quis odio, enim assumenda omnis, sapiente reiciendis amet nulla cupiditate explicabo dolore voluptatum deleniti? Non sint nemo fugit corrupti?
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt='logo' />
        </Logo>
      </Content>
    </Container>
  )
}
