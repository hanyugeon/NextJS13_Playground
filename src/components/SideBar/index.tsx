import { icClose } from '@/assets/icons'
import Image from 'next/image'
import { NavLinkItem, NavRouteItem } from '@/components/Common/Nav'
import {
  NAV_LINK_CONTENTS,
  NAV_ROUTE_CONTENTS,
} from '../Common/Nav/initialContents'
import * as S from './styled'

interface SideBarTypes {
  toggleSideBar: () => void
  isSideBarOpen: boolean
}

const SideBar = ({ toggleSideBar, isSideBarOpen }: SideBarTypes) => {
  return (
    <S.SideBarWrapper isSideBarOpen={isSideBarOpen}>
      <S.SideBar>
        <S.SideBarCloseButton aria-label={'SideBarClose'}>
          <Image
            width={22}
            height={22}
            onClick={toggleSideBar}
            src={icClose}
            alt="SideBarClose"
          />
        </S.SideBarCloseButton>
        <S.SideBarNavContainer>
          {NAV_ROUTE_CONTENTS.map((content) => (
            <NavRouteItem
              key={content.title}
              href={content.href}
              title={content.title}
            />
          ))}
          <S.SideBarNavLinkContainer>
            {NAV_LINK_CONTENTS.map((content) => (
              <NavLinkItem
                key={content.title}
                href={content.href}
                title={content.title}
                icon={content.icon}
              />
            ))}
          </S.SideBarNavLinkContainer>
        </S.SideBarNavContainer>
      </S.SideBar>
    </S.SideBarWrapper>
  )
}

export default SideBar
