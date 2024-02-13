import { Container, Main } from "./style"

import { Header } from "../../components/header"
import { AddTask } from "../../components/addTask"
import { TaskSession } from "../../components/taskSession"

export function App(){
  return(
    <Container>
      <Header/>
      
      <Main>
        <AddTask/>

        <TaskSession/>
      </Main>
    </Container>
  )
}