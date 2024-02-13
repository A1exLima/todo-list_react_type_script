import { Container } from "./style"
import { PlusCircle } from "@phosphor-icons/react"

export function AddTask(){
  return(
    <Container>
      <input 
        placeholder="Adicione uma nova tarefa"
        type="text" 
      />
      <button 
        type="submit"
      >
        Criar 
        <PlusCircle />
      </button>
    </Container>
  )
}
