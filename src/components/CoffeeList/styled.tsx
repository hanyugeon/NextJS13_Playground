'use client'

import BREAKPOINTS from '@/styles/BreakPoints'
import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const StyledCoffeeListContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  max-height: 74.4rem;
  background-color: ${COLOR.white};

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    max-width: 60rem;
    max-height: 55.8rem;
  }
`

const StyledCoffeeListHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 8rem;
  text-align: center;
  align-items: center;
  background-color: ${COLOR.brand1};
  color: ${COLOR.white};

  span:nth-of-type(1) {
    width: 16%;
  }
  span:nth-of-type(2) {
    width: 48%;
  }
  span:nth-of-type(3) {
    width: 18%;
  }
  span:nth-of-type(4) {
    width: 18%;
  }
`

const StyledCoffeeListHeaderTable = styled.span`
  font-size: 1.8rem;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.6rem;
  }
`

const StyledCoffeeListWrapper = styled.article`
  overflow: overlay;
  width: 100%;
  height: calc(100% - 8rem);
`

export {
  StyledCoffeeListContainer,
  StyledCoffeeListHeaderContainer,
  StyledCoffeeListHeaderTable,
  StyledCoffeeListWrapper,
}
