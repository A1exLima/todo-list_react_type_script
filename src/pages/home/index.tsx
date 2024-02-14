import { Container, Main, Content, Footer } from "./style"

import { Header } from "../../components/header"
import { TaskSession } from "../../components/taskSession"

import { LinkedinLogo } from "@phosphor-icons/react"


export function App(){
  return(
    <Container>
      <Header/>

      <Main>
        <Content>
          <TaskSession/>
        </Content>
      </Main>
      
      <Footer>
        <p>Developed by Alex Lima - © 2024 Todos os direitos reservados.</p>
        <a target="_blank" href="https://www.linkedin.com/in/a1exlima/"> <LinkedinLogo/> </a>
      </Footer>
    </Container>
  )
}