import { styled } from "styled-components"

export const Container = styled.header`
  width: 100%;
  min-height: 20rem;
  background: ${({theme})=> theme.COLORS.GRAY600};
  border-bottom: 1px solid ${({theme})=> theme.COLORS.GRAY700};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    min-height: 16rem;
  }

  > svg {
    font-size: 3.2rem;
    color: ${({theme})=> theme.COLORS.BLUE100};
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