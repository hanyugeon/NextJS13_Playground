import { icHamburger } from '@/assets/icons'
import { NavLinkItem, NavRouteItem } from '@/components/Common/Nav'
import {
  NAV_LINK_CONTENTS,
  NAV_ROUTE_CONTENTS,
} from '@/components/Common/Nav/initialContents'
import Image from 'next/image'
import HeaderLogo from './HeaderLogo'
import * as S from './styled'

interface HeaderTypes {
  onOpen: () => void
}

const Header = ({ onOpen }: HeaderTypes) => {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <HeaderLogo />
        <S.HeaderNav>
          <S.HeaderNavMenu>
            {NAV_ROUTE_CONTENTS.map((content) => (
              <NavRouteItem
                key={content.title}
                href={content.href}
                title={content.title}
              />
            ))}
          </S.HeaderNavMenu>
          <S.HeaderNavLink>
            {NAV_LINK_CONTENTS.map((content) => (
              <NavLinkItem
                key={content.title}
                href={content.href}
                title={content.title}
                icon={content.icon}
              />
            ))}
          </S.HeaderNavLink>
          <S.HeaderHamburger aria-label={'SideBarOpen'}>
            <Image
              onClick={onOpen}
              width={30}
              height={30}
              src={icHamburger}
              alt="SideBarOpen"
            />
          </S.HeaderHamburger>
        </S.HeaderNav>
      </S.Header>
    </S.HeaderWrapper>
  )
}

export default Header
