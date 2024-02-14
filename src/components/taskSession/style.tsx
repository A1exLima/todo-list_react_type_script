import { styled } from "styled-components"

export const Container = styled.article`
  width: 100%;
  height: fit-content;
`

export const Header = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.4rem;
  border-bottom: 1px solid ${({theme})=> theme.COLORS.GRAY400};
  

  > div {
    display: flex;
    align-items: center;
    gap: .8rem;

    > p {
      font-size: 1.4rem;
      font-weight: 600;
    }
    
    > span {
      border-radius: 9999rem;
      background-color: ${({theme})=> theme.COLORS.GRAY400};
      padding: .2rem .8rem;
      color: ${({theme})=> theme.COLORS.GRAY200};
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  > div:first-child {
    > p {
      color: ${({theme})=> theme.COLORS.BLUE100};
    }
  }

  > div:last-child {
    > p {
      color: ${({theme})=> theme.COLORS.PURPLE100};

    }
  }
`

export const Section = styled.section`
  width: 100%;
  height: fit-content;
  
`

export const TaskBox = styled.article`
  width: 100%;
  height: fit-content;
  padding-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const EmptyTaskMessage = styled.article` 

  width: 100%;
  height: fit-content;
  padding-top: 6.4rem;
  display: flex;
  align-items: center;
  flex-direction: column;


  > img {
    padding-bottom: 1.6rem;
  }

  > p {
    line-height: 1.4;
    color: ${({theme})=> theme.COLORS.GRAY300};
  }

  > p:nth-child(2) {
    font-weight: 600;
  }
`
