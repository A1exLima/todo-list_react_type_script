import { Container, Main } from "./style"

import { Header } from "../../components/header"
import { TaskSession } from "../../components/taskSession"

export function App(){
  return(
    <Container>
      <Header/>
      <Main>
        <TaskSession/>
      </Main>
    </Container>
  )
}