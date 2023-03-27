import { COLOR } from '@/styles/Colors'
import BREAKPOINTS from '@/styles/BreakPoints'
import styled from '@emotion/styled'

const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10rem;
  padding: 0 4rem;
  background-color: ${COLOR.white};

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    height: 8rem;
    padding: 0 2rem;
  }
`

const StyledHeader = styled.nav`
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

const StyledHeaderLogo = styled.nav`
  width: 24.4rem;

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    width: 10rem;

    img {
      width: 10rem;
    }
  }
`

const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > nav > img {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: ${BREAKPOINTS.mobile}px) {
    align-items: flex-end;
    width: 3rem;
    height: 3rem;

    > nav {
      display: none;
    }
  }
`

const StyledHeaderNavMenu = styled.nav`
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

const StyledHeaderNavLink = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3rem;
  height: 100%;
`

const StyledHeaderHamburger = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3rem;
  height: 3rem;

  @media (min-width: ${BREAKPOINTS.mobile}px) {
    display: none;
  }
`

export {
  StyledHeaderWrapper,
  StyledHeader as StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderNavMenu,
  StyledHeaderNavLink,
  StyledHeaderHamburger,
}
