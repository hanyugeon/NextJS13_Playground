import BREAKPOINTS from '@/styles/BreakPoints'
import styled from '@emotion/styled'

export const Template = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 18rem 16rem 10rem 16rem;
  width: 100%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    padding: 12rem 4rem 8rem 4rem;
  }
`
