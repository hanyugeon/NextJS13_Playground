'use client'

import BREAKPOINTS from '@/styles/breakpoints'
import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const CoffeeItemContainer = styled.article`
  display: flex;
  width: 100%;
  height: 7.2rem;
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
    width: 24%;
  }
  div:nth-of-type(2) {
    width: 36%;
  }
`

const CoffeeItemImageWrapper = styled.div`
  height: 100%;

  > img {
    border-radius: 1.6rem;
    object-fit: cover;

    @media (max-width: ${BREAKPOINTS.mobile}px) {
      width: 5.2rem;
      height: 5.2rem;
    }
  }
`

const CoffeeItemTitle = styled.div<{ isSoldOut: boolean }>`
  height: 100%;
  font-size: 2.2rem;
  text-decoration: ${(props) => (props.isSoldOut ? 'line-through' : 'none')};
  color: ${(props) => (props.isSoldOut ? COLOR.gray : COLOR.black)};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 1.8rem;
  }
  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.6rem;
  }
`

const CoffeeItemCheckBox = styled.button<{
  isChecked: boolean
  onClick: () => void
}>`
  width: 2rem;
  height: 2rem;
  margin: auto;
  background-color: ${({ isChecked }) =>
    isChecked ? `${COLOR.negative1}` : `${COLOR.negative3}`};
  border-radius: 0.4rem;
  transition: all 200ms;

  :hover {
    background-color: ${COLOR.negative2};
  }
`

export {
  CoffeeItemContainer,
  CoffeeItemImageWrapper,
  CoffeeItemTitle,
  CoffeeItemCheckBox,
}
