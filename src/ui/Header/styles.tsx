import BREAKPOINTS from '@/styles/breakpoints'
import { COLOR } from '@/styles/colors'
import styled from '@emotion/styled'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10rem;
  padding: 0 4rem;
  background-color: ${COLOR.white};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    height: 9rem;
    padding: 0 2rem;
  }
`

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 120rem;
  height: 100%;

  span,
  img {
    cursor: pointer;
  }
`

export const HeaderLogo = styled.nav`
  width: 24.4rem;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 10rem;

    svg {
      width: 10rem;
    }
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 3rem;
    height: 3rem;

    > nav {
      display: none;
    }
  }
`

export const HeaderNavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  > a {
    font-size: 2rem;
    font-weight: bold;
    color: ${COLOR.brand1};
  }
`

export const HeaderNavLink = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3rem;
  height: 100%;
`

export const HeaderHamburger = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }
`
