import { Container, Header, Section, Article } from "./style"

import book from "../../assets/book.svg"
import { Task } from "../task" 

export function TaskSession(){
  return(
    <Container>
      <Header>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </Header>

      <Section>
        <article className="no-tasks">
          <img src={book}/>
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </article>

        <Article>
          <Task id="1"/>
          <Task id="2"/>
          <Task id="3"/>
        </Article>
      </Section>

    </Container>
  )
}