'use client'

import { COLOR } from '@/styles/Colors'
import styled from '@emotion/styled'

const StyledHeaderWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 10rem;
  padding: 0 4rem;
  background-color: ${COLOR.white};
`

const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 120rem;
  height: 100%;

  > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span,
  img {
    cursor: pointer;
  }
`

const StyledHeaderLogo = styled.nav`
  width: 24.4rem;
`

const StyledHeaderNav = styled.nav`
  width: 100%;
`

const StyledHeaderNavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`

const StyledHeaderNavMenuItem = styled.span`
  font-size: 1.8rem;
  color: ${COLOR.brand1};
`

const StyledHeaderNavLink = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3rem;
  height: 100%;

  > img {
    width: 3rem;
    height: 3rem;
  }
`

export {
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderNavMenu,
  StyledHeaderNavMenuItem,
  StyledHeaderNavLink,
}
