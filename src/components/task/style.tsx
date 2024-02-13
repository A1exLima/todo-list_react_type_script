import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 7.2rem;
  background-color: ${({theme})=> theme.COLORS.GRAY500};
  border-radius: .8rem;
  padding: 1.6rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.6rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.6rem;

  .custom-checkbox-container {
    display: inline-block;
  }

  .custom-checkbox-container input[type="checkbox"] {
    display: none;
  }

  .custom-checkbox-container label {
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    border: 2px solid ${({theme})=> theme.COLORS.BLUE100};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }

  .custom-checkbox-container input[type="checkbox"]:checked + label {
    background-color: ${({theme})=> theme.COLORS.PURPLE200};
    border: none;
  }

  .custom-checkbox-container label::after {
    content: ""; 
    width: 5px; 
    height: 10px; 
    border: solid ${({theme})=> theme.COLORS.GRAY100}; 
    border-width: 0 2px 2px 0;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
  }

  .custom-checkbox-container input[type="checkbox"]:checked + label::after {
    opacity: 1;
  }

  > p {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.4;
    color: ${({theme})=> theme.COLORS.GRAY100};
  }

`

export const ContentDelete = styled.div`

  > svg {
    cursor: pointer;
    font-size: 2.4rem;
    color: ${({theme})=> theme.COLORS.GRAY300};

    transition: color .4s ease-in-out;

    &:hover {
      color: ${({theme})=> theme.COLORS.RED100};
    }
  }
`