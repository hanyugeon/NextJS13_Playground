'use client'

import styled from "@emotion/styled";
import { COLOR } from '@/styles/Colors';

const StyledCoffeeListContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 80rem;
  max-height: 74.4rem;
  background-color: ${COLOR.white};
`

const StyledCoffeeListHeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 8rem;
  text-align: center;
  align-items: center;
  background-color: ${COLOR.brand1};
  color: ${COLOR.white};

  span:nth-of-type(1) { width: 10%; }
  span:nth-of-type(2) { width: 60%; }
  span:nth-of-type(3) { width: 15%; } 
  span:nth-of-type(4) { width: 15%; }
`

const StyledCoffeeListHeaderTable = styled.span`
  font-size: 1.8rem;
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