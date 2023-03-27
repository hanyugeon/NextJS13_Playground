import { icClose } from '@/assets/icons'
import Image from 'next/image'
import { NavLinkItem, NavRouteItem } from '../Common/Nav'
import {
  NAV_LINK_CONTENTS,
  NAV_ROUTE_CONTENTS,
} from '../Common/Nav/initialContents'
import {
  StyledSideBar,
  StyledSideBarCloseButton,
  StyledSideBarNavLinkContainer,
  StyledSideBarNavContainer,
  StyledSideBarWrapper,
} from './styled'

interface SideBarTypes {
  toggleSideBar: () => void
  isSideBarOpen: boolean
}

const SideBar = ({ toggleSideBar, isSideBarOpen }: SideBarTypes) => {
  return (
    <StyledSideBarWrapper isSideBarOpen={isSideBarOpen}>
      <StyledSideBar>
        <StyledSideBarCloseButton aria-label={'SideBarCloseButton'}>
          <Image
            width={22}
            height={22}
            onClick={toggleSideBar}
            src={icClose}
            alt="SideBarCloseIcon"
          />
        </StyledSideBarCloseButton>
        <StyledSideBarNavContainer>
          {NAV_ROUTE_CONTENTS.map((content) => (
            <NavRouteItem
              key={content.title}
              href={content.href}
              title={content.title}
            />
          ))}
          <StyledSideBarNavLinkContainer>
            {NAV_LINK_CONTENTS.map((content) => (
              <NavLinkItem
                key={content.title}
                href={content.href}
                title={content.title}
                icon={content.icon}
              />
            ))}
          </StyledSideBarNavLinkContainer>
        </StyledSideBarNavContainer>
      </StyledSideBar>
    </StyledSideBarWrapper>
  )
}

export default SideBar
