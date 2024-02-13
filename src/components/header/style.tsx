import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  background: ${({theme})=> theme.COLORS.GRAY700};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  > img {
    margin-top: .8rem;
    height: 3.6rem;
  }

  > div {
    font-size: 4rem;
    font-weight: 800;
    line-height: 140%;

    > span:first-child {
      color: ${({theme})=> theme.COLORS.BLUE100};
    }

    > span:last-child {
      color: ${({theme})=> theme.COLORS.PURPLE200};
    }
  }
`