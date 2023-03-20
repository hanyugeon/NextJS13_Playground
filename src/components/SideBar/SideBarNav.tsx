import { icGithub } from '@/assets/icons'
import { NextPage } from 'next/types'
import SideBarCloseButton from './SideBarCloseButton'
import SideBarNavItem from './SideBarNavItem'
import {
  StyledSideBarNav,
  StyledSideBarNavLink,
  StyledSideBarNavMenu,
} from './styled'

/**
 * @todo
 * 데이터 정리 할 것
 */

const NAV_MENU_CONTENTS = [
  { href: '/', variant: 'menu', title: '커피 목록' },
  { href: '/tech', variant: 'menu', title: '기술 스택' },
  { href: '/about', variant: 'menu', title: '만든 계기' },
]
const NAV_LINK_CONTENTS = [
  {
    href: 'https:/github.com/hanyugeon',
    variant: 'link',
    title: 'github',
    icon: icGithub,
  },
]
/**
 * @todo
 * 아이콘 요소는 어떻게 타입을 분리할 것인가
 * 이후 타입 정리 고도화 작업 때 생각해 볼것.
 */

const SideBarNav: NextPage = () => {
  return (
    <StyledSideBarNav>
      <SideBarCloseButton />
      <StyledSideBarNavMenu>
        {NAV_MENU_CONTENTS.map((content) => (
          <SideBarNavItem
            key={content.title}
            href={content.href}
            variant={content.variant}
            title={content.title}
          />
        ))}
        <StyledSideBarNavLink>
          {NAV_LINK_CONTENTS.map((content) => (
            <SideBarNavItem
              key={content.title}
              href={content.href}
              variant={content.variant}
              title={content.title}
              icon={content.icon}
            />
          ))}
        </StyledSideBarNavLink>
      </StyledSideBarNavMenu>
    </StyledSideBarNav>
  )
}

export default SideBarNav
