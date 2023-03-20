import { icGithub } from '@/assets/icons'
import HeaderHamburger from './HeaderHamburger'
import HeaderNavItem from './HeaderNavItem'
import {
  StyledHeaderNav,
  StyledHeaderNavLink,
  StyledHeaderNavMenu,
} from './styled'

/**
 * @todo
 * 더미데이터 root를 객체로 감쌀 것.
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
 * NavItem을 분리하는게 좋아보인다.
 * why?
 * 01. 조건문에 의해 코드가 불필요하게 길어짐
 * 02. 조건문에 의해 해당 컴포넌트의 리턴값을 확정지을 수 없음
 * 이후에 분리작업 할 것
 */

const HeaderNav = () => {
  return (
    <StyledHeaderNav>
      <StyledHeaderNavMenu>
        {NAV_MENU_CONTENTS.map((content) => (
          <HeaderNavItem
            key={content.title}
            href={content.href}
            variant={content.variant}
            title={content.title}
          />
        ))}
      </StyledHeaderNavMenu>
      <StyledHeaderNavLink>
        {NAV_LINK_CONTENTS.map((content) => (
          <HeaderNavItem
            key={content.title}
            href={content.href}
            variant={content.variant}
            title={content.title}
            icon={content.icon}
          />
        ))}
      </StyledHeaderNavLink>
      <HeaderHamburger />
    </StyledHeaderNav>
  )
}

export default HeaderNav
