import { Container } from "./style"

import { useState, ChangeEvent } from "react"

import { PlusCircle } from "@phosphor-icons/react"

interface AddTaskProps {
  onUpdateTasks: (update: number) => void
}

export function AddTask({onUpdateTasks}: AddTaskProps){
  const [newTask, setNewTask] = useState("")
  const emptyTextTasks = newTask.length === 0

  function handleInputValue(e: ChangeEvent<HTMLInputElement>){
    setNewTask(e.target.value)
  }

  function handleTaskSubmission(){
    const storedTasks = JSON.parse(localStorage.getItem("@todo:tasks") ?? "[]");

    if(storedTasks){
      let newTaskObject = {
        id: Math.floor(Math.random() * 1001),
        task: newTask,
        check: false
      }

      let arrayStoredTasks = [...storedTasks, newTaskObject]
      localStorage.setItem("@todo:tasks", JSON.stringify(arrayStoredTasks));
    }

    onUpdateTasks(Math.random())
    setNewTask("")
  }

  return(
    <Container>
      <input 
        placeholder="Adicione uma nova tarefa"
        type="text"
        onChange={handleInputValue}
        value={newTask}
      />
      <button 
        type="button"
        disabled={emptyTextTasks}
        onClick={handleTaskSubmission}
      >
        Criar 
        <PlusCircle />
      </button>
    </Container>
  )
}
