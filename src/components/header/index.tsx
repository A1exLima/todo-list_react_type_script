import { Container } from "./style"

import { ListChecks } from "@phosphor-icons/react"


export function Header(){
  return(
    <Container>
      <ListChecks size={42} />
      <div>
        <span>todo</span>
        <span>List</span>
      </div>
    </Container>
  )
}