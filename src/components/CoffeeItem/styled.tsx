'use client'

import styled from '@emotion/styled'
import { COLOR } from '@/styles/Colors'

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
`

const StyledCoffeeItemHottest = styled.div<{ isHottest: boolean }>`
  width: 10%;
  height: 100%;

  > img {
    width: 3rem;
    height: 3rem;
    visibility: ${(props) => (props.isHottest ? 'visible' : 'hidden')};
  }
`

const StyledCoffeeItemContent = styled.div<{ isSoldOut: boolean }>`
  width: 60%;
  height: 100%;
  font-size: 2.2rem;
  text-decoration: ${(props) => (props.isSoldOut ? 'line-through' : 'none')};
  color: ${COLOR.black};
`

const StyledCoffeeItemCheckBox = styled.div`
  width: 15%;
  height: 100%;
`

const StyledCoffeeItemCheckBoxElement = styled.div<{
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
