import { Container } from "./style"

import brand from "../../assets/brand.svg"

export function Header(){
  return(
    <Container>
      <img src={brand} alt="Logotipo" />
      <div>
        <span>to</span>
        <span>do</span>
      </div>
    </Container>
  )
}