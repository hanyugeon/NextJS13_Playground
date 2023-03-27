import { icHamburger } from '@/assets/icons'
import { NavLinkItem, NavRouteItem } from '@/components/Common/Nav'
import {
  NAV_LINK_CONTENTS,
  NAV_ROUTE_CONTENTS,
} from '@/components/Common/Nav/initialContents'
import Image from 'next/image'
import HeaderLogo from './HeaderLogo'
import {
  StyledHeaderContainer,
  StyledHeaderHamburger,
  StyledHeaderNav,
  StyledHeaderNavLink,
  StyledHeaderNavMenu,
  StyledHeaderWrapper,
} from './styled'

interface HeaderTypes {
  toggleSideBar: () => void
}

const Header = ({ toggleSideBar }: HeaderTypes) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <HeaderLogo />
        <StyledHeaderNav>
          <StyledHeaderNavMenu>
            {NAV_ROUTE_CONTENTS.map((content) => (
              <NavRouteItem
                key={content.title}
                href={content.href}
                title={content.title}
              />
            ))}
          </StyledHeaderNavMenu>
          <StyledHeaderNavLink>
            {NAV_LINK_CONTENTS.map((content) => (
              <NavLinkItem
                key={content.title}
                href={content.href}
                title={content.title}
                icon={content.icon}
              />
            ))}
          </StyledHeaderNavLink>
          <StyledHeaderHamburger aria-label={'NavigationToggle'}>
            <Image
              onClick={toggleSideBar}
              width={30}
              height={30}
              src={icHamburger}
              alt="SideBarHamburder"
            />
          </StyledHeaderHamburger>
        </StyledHeaderNav>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  )
}

export default Header
