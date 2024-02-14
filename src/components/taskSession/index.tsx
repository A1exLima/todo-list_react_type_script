import { Container, Header, Section, TaskBox, EmptyTaskMessage } from "./style"

import {useLayoutEffect, useState } from "react"

import book from "../../assets/book.svg"

import { Task } from "../task"
import { AddTask } from "../addTask"

export interface TaskProps {
  id: number;
  task: string;
  check: boolean;
}

export function TaskSession(){
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [qtdTasks, setQtdTasks] = useState(0)
  const [qtdTasksCompleted, setQtdTasksCompleted] = useState(0)
  const [updateTask, setUpdateTask] = useState(0)


  function UpdateTasks(update: number){
    setUpdateTask(update)
  }

  function numberOfTasksCreated(){
    setQtdTasks(tasks.length)
  }

  function numberOfTasksCompleted(){
    const storedTasks = JSON.parse(localStorage.getItem("@todo:tasks") ?? "[]");

    const numberOfTasksCompleted = storedTasks.reduce(
      (accumulator: number, task: { check: boolean }) => {
        return task.check ? accumulator + 1 : accumulator;
      }, 0
    );
    
    setQtdTasksCompleted(numberOfTasksCompleted)
  }
  
  useLayoutEffect(()=>{ //capture tasks data from local storage
    const storedTasks = localStorage.getItem("@todo:tasks")

    if(!storedTasks){
      localStorage.setItem("@todo:tasks", JSON.stringify(tasks))
    }else{
      setTasks(JSON.parse(storedTasks))
    }
  },[updateTask])

  useLayoutEffect(()=>{ //update number of tasks created
    numberOfTasksCreated()
  },[tasks])

  useLayoutEffect(()=>{ //update number of tasks completed
    numberOfTasksCompleted()
  },[tasks])

  return(
    <Container>
      <AddTask
        onUpdateTasks={UpdateTasks}
      />
      
      <Header>
        <div>
          <p>Tarefas criadas</p>
          <span>{qtdTasks}</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>{`${qtdTasksCompleted} de ${qtdTasks}`}</span>
        </div>
      </Header>

      <Section>
        {
          tasks.length !== 0 ? (
            <TaskBox>
              { tasks &&
                tasks.map((item)=>(
                  <Task
                    key={item.id}
                    id={item.id}
                    task={item.task}
                    check={item.check}
                    onUpdateTasks={UpdateTasks}
                  />
                ))
              }
            </TaskBox>
          ) : (
            <EmptyTaskMessage className="no-tasks">
              <img src={book}/>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </EmptyTaskMessage>
          )
        }        
      </Section>

    </Container>
  )
}