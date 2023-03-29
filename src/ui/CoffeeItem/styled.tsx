'use client'

import BREAKPOINTS from '@/styles/BreakPoints'
import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const StyledCoffeeItemContainer = styled.article`
  display: flex;
  width: 100%;
  height: 8rem;
  text-align: center;
  background-color: ${COLOR.white};

  :nth-of-type(even) {
    background-color: ${COLOR.brand3};
  }

  :hover {
    background-color: ${COLOR.hover};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:nth-of-type(1) {
    width: 16%;
  }
  div:nth-of-type(2) {
    width: 48%;
  }
  div:nth-of-type(3) {
    width: 18%;
  }
  div:nth-of-type(4) {
    width: 18%;
  }
`

const StyledCoffeeItemHottest = styled.div<{ isHottest: boolean }>`
  height: 100%;

  > img {
    width: 3rem;
    height: 3rem;
    visibility: ${(props) => (props.isHottest ? 'visible' : 'hidden')};
  }
`

const StyledCoffeeItemContent = styled.div<{ isSoldOut: boolean }>`
  height: 100%;
  font-size: 2.2rem;
  text-decoration: ${(props) => (props.isSoldOut ? 'line-through' : 'none')};
  color: ${(props) => (props.isSoldOut ? COLOR.gray : COLOR.black)};

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.8rem;
  }
`

const StyledCoffeeItemCheckBox = styled.div`
  height: 100%;
`

const StyledCoffeeItemCheckBoxElement = styled.button<{
  isChecked: boolean
  onClick: () => void
}>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) =>
    props.isChecked ? `${COLOR.negative1}` : `${COLOR.negative3}`};
  border-radius: 0.4rem;
  transition: all 200ms;

  :hover {
    background-color: ${COLOR.negative2};
  }
`

export {
  StyledCoffeeItemContainer,
  StyledCoffeeItemHottest,
  StyledCoffeeItemContent,
  StyledCoffeeItemCheckBoxElement,
  StyledCoffeeItemCheckBox,
}
