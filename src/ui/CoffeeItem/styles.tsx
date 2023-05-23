'use client'

import BREAKPOINTS from '@/styles/breakpoints'
import { COLOR } from '@/styles/colors'
import styled from '@emotion/styled'

export const CoffeeItemContainer = styled.article`
  display: flex;
  width: 100%;
  height: 7.2rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.white};

  :nth-of-type(even) {
    background-color: ${COLOR.brand3};
  }

  :hover {
    background-color: ${COLOR.hover};
  }

  > div {
    display: flex;
    align-items: center;
  }

  div:nth-of-type(1) {
    width: 3rem;
    justify-content: center;
  }
  div:nth-of-type(2) {
    width: 6rem;
    justify-content: flex-start;
  }
  div:nth-of-type(3) {
    width: calc(64% - 9rem);
    justify-content: center;
  }
`

export const CoffeeItemBadgeWrapper = styled.div<{ isBestSeller: boolean }>`
  width: 2rem;

  > svg {
    margin: 0 auto;

    opacity: ${({ isBestSeller }) => (isBestSeller ? 1 : 0)};
  }
`

export const CoffeeItemImageWrapper = styled.div`
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

export const CoffeeItemTitle = styled.div<{ isSoldOut: boolean }>`
  height: 100%;
  font-size: 2.2rem;
  text-decoration: ${({ isSoldOut }) => (isSoldOut ? 'line-through' : 'none')};
  color: ${({ isSoldOut }) => (isSoldOut ? COLOR.gray : COLOR.black)};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 1.8rem;
  }
  @media (max-width: ${BREAKPOINTS.mobile}px) {
    font-size: 1.6rem;
  }
`

export const CoffeeItemCheckBox = styled.button<{
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
