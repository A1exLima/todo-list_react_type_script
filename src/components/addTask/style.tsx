import { styled } from "styled-components"

export const Container = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  margin: -2.7rem 0 6.4rem 0;

  > input {
    border: none;
    background: ${({theme})=> theme.COLORS.GRAY500};
    border-radius: .8rem;
    padding: 1.6rem;
    width: 100%;
    height: 5.4rem;
    color: ${({theme})=> theme.COLORS.GRAY100};
    
    transition: box-shadow .4s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 1px ${({theme})=> theme.COLORS.PURPLE200};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${({theme})=> theme.COLORS.PURPLE200};
    }

    &::placeholder{
      line-height: 140%;
    }
  }

  > button[type=button] {
    width: fit-content;
    height: 5.2rem;
    display: flex;
    align-items: center;
    gap: .8rem;

    background-color: ${({theme})=> theme.COLORS.BLUE200};
    border-radius: .8rem;
    border: none;
    padding: 1.6rem;
    
    color: ${({theme})=> theme.COLORS.GRAY100};
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 140%;

    cursor: pointer;
    transition: background-color .4s ease-in-out;

    &:not(:disabled):hover {
      background-color: ${({theme})=> theme.COLORS.BLUE100};
    }

    > svg {
      font-size: 2.2rem;
    }
  }

  > button[type=button]:disabled {
    cursor: not-allowed;
    opacity: .7;
  }
`