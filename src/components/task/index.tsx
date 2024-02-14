import { Container, Wrapper, ContentDelete} from "./style"

import { useState, ChangeEvent, useEffect} from "react";

import { Trash } from "@phosphor-icons/react"

export interface TaskProps {
  id: number;
  task: string;
  check: boolean;
  onUpdateTasks: (update: number)=> void
}

export function Task({ id, task, check, onUpdateTasks }: TaskProps){
  const [isChecked, setIsChecked] = useState(check);

  function handleCheckBoxChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  }

  function markTaskAsCompleted(){
    const storedTasks = JSON.parse(localStorage.getItem("@todo:tasks") ?? "[]");
    
    let newStoredTasks = storedTasks.map((item: { id: number; check: boolean; })=>{
        if(item.id === id){
          return {...item, check: isChecked};
        }
        return item
      })

    localStorage.setItem("@todo:tasks", JSON.stringify(newStoredTasks));
    onUpdateTasks(Math.random())
  }

  function handleDeleteTask(){
    const storedTasks = JSON.parse(localStorage.getItem("@todo:tasks") ?? "[]");

    const newArrayObjects = storedTasks.filter((task: { id: number; }) => task.id !== id);

    localStorage.setItem("@todo:tasks", JSON.stringify(newArrayObjects));
    onUpdateTasks(Math.random())
  }

  useEffect(()=>{
    markTaskAsCompleted()
  },[isChecked])

  return(
    <Container>
      <Wrapper $lineThroughText={isChecked}>
        <div className="custom-checkbox-container">
          <input 
            type="checkbox" 
            className="custom-checkbox" 
            id={id.toString()}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor={id.toString()}></label>
        </div>
    
        <p>{task}</p>
      </Wrapper>

      <ContentDelete>
        <Trash 
          weight="bold"
          onClick={handleDeleteTask}
        />
      </ContentDelete>
    </Container>
  )
}