import BREAKPOINTS from '@/styles/breakpoints'
import { COLOR } from '@/styles/colors'
import styled from '@emotion/styled'

export const SideBarWrapper = styled.aside<{ isOpen: boolean }>`
  position: absolute;
  display: none;
  justify-content: flex-end;
  z-index: 2;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1rem);

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};

    > aside {
      animation: ease-in-out 0.6s ${({ isOpen }) => (isOpen ? 'showUp' : '')};
    }

    @keyframes showUp {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`

export const SideBarContainer = styled.aside`
  position: absolute;
  width: 32rem;
  height: 100%;
  right: 0;
  z-index: 3;
  background-color: ${COLOR.white};
`

export const SideBarCloseButton = styled.button`
  position: absolute;
  margin: 2rem;
  padding: 0;
  right: 0;
`

export const SideBarNavContainer = styled.nav`
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

export const SideBarNavLinkContainer = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
