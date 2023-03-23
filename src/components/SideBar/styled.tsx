'use client'

import BREAKPOINTS from '@/styles/BreakPoints'
import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const StyledSideBarWrapper = styled.aside`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1rem);

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }
`

const StyledSideBar = styled.aside`
  width: 32rem;
  height: 100%;
  background-color: ${COLOR.white};
`

const StyledSideBarCloseButton = styled.button`
  position: absolute;
  margin: 2rem;
  padding: 0;
  right: 0;
`

const StyledSideBarMenuContainer = styled.nav`
  display: grid;
  align-content: start;
  justify-content: center;
  place-items: center;
  margin-top: 7.5rem;
  gap: 3.2rem;
  width: 100%;
  height: 100%;

  > a {
    font-size: 2rem;
    font-weight: bold;
    color: ${COLOR.brand1};
  }
`

const StyledSideBarLinkContainer = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

export {
  StyledSideBarWrapper,
  StyledSideBar,
  StyledSideBarCloseButton,
  StyledSideBarMenuContainer,
  StyledSideBarLinkContainer,
}
