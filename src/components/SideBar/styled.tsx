'use client'

import BREAKPOINTS from '@/styles/BreakPoints'
import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const StyledSideBarContainer = styled.aside`
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

const StyledSideBarNav = styled.aside`
  width: 32rem;
  height: 100%;
  background-color: ${COLOR.white};
`

const StyledSideBarCloseButton = styled.button`
  position: absolute;
  margin: 2rem;
  padding: 0;
  right: 0;
  width: 2.2rem;
  height: 2.2rem;
`

const StyledSideBarNavMenu = styled.nav`
  display: grid;
  align-content: start;
  justify-content: center;
  place-items: center;
  margin-top: 7.5rem;
  gap: 3.2rem;
  width: 100%;
  height: 100%;
`

const StyledSideBarNavMenuItem = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLOR.brand1};
`

const StyledSideBarNavLink = styled.nav`
  width: 3rem;
  height: 3rem;
`

export {
  StyledSideBarContainer,
  StyledSideBarNav,
  StyledSideBarCloseButton,
  StyledSideBarNavMenu,
  StyledSideBarNavMenuItem,
  StyledSideBarNavLink,
}
