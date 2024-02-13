import { Container, Wrapper, ContentDelete} from "./style"

import { useState, ChangeEvent } from "react";

import { Trash } from "@phosphor-icons/react"

interface TaskProps {
  id: string
}

export function Task({ id }: TaskProps){
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckBoxChange(e: ChangeEvent<HTMLInputElement>) {
    setIsChecked(e.target.checked);
  };

  return(
    <Container>
      <Wrapper>
        <div className="custom-checkbox-container">
          <input 
            type="checkbox" 
            className="custom-checkbox" 
            id={id}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />
          <label htmlFor={id}></label>
        </div>
    
        <p>Planejamento financeiro mensal e salvamento dos comprovantes de pagamento Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia suscipit excepturi eligendi ipsa odio aspernatur saepe nam? Vel facilis in eligendi iusto aperiam quas, nemo consectetur atque dignissimos velit quo?</p>
      </Wrapper>

      <ContentDelete>
        <Trash weight="bold"/>
      </ContentDelete>
    </Container>
  )
}