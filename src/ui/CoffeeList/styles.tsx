'use client'

import BREAKPOINTS from '@/styles/breakpoints'
import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const CoffeeListContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  max-height: 74.4rem;
  background-color: ${COLOR.white};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 60rem;
    max-height: 55.8rem;
  }
`

const CoffeeListHeader = styled.header`
  display: flex;
  width: 100%;
  height: 8.5rem;
  text-align: center;
  align-items: center;
  background-color: ${COLOR.brand1};
  color: ${COLOR.white};

  span:nth-of-type(1) {
    width: 64%;
  }
  span:nth-of-type(2) {
    width: 18%;
  }
  span:nth-of-type(3) {
    width: 18%;
  }
`

const CoffeeListHeaderTable = styled.span`
  font-size: 1.8rem;
  font-weight: bold;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.4rem;
  }
`

const CoffeeListBody = styled.article`
  overflow: overlay;
  width: 100%;
  height: calc(100% - 8.5rem);
`

export {
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListHeaderTable,
  CoffeeListBody,
}
