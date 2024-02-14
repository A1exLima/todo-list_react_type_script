import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Main = styled.main`
  flex-grow: 1;
`

export const Content = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding: 0 2rem 2rem;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  border-top: 1px solid ${({theme})=> theme.COLORS.GRAY700};

  > p {
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  }

  > a {
    padding-top: .5rem;
    outline: none;

    > svg{
      color: ${({theme})=> theme.COLORS.BLUE200};
      font-size: 3rem;
      cursor: pointer;

      transition: color.4s ease-in-out;

      &:hover {
      color: ${({theme})=> theme.COLORS.BLUE100};

      }
    }
  }
`