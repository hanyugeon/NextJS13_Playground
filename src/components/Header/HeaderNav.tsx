import { icGithub } from '@/assets/icons'
import { NextPage } from 'next/types'
import HeaderHamburger from './HeaderHamburger'
import HeaderNavItem from './HeaderNavItem'
import {
  StyledHeaderNav,
  StyledHeaderNavLink,
  StyledHeaderNavMenu,
} from './styled'

type MENU_TYPES = { href: string; variant: string; title: string }[]
type LINK_TYPES = {
  href: string
  variant: string
  title: string
  icon: string
}[]

const NAV_MENU_CONTENTS: MENU_TYPES = [
  { href: '/', variant: 'menu', title: '커피 목록' },
  { href: '/tech', variant: 'menu', title: '기술 스택' },
  { href: '/about', variant: 'menu', title: '만든 계기' },
]
const NAV_LINK_CONTENTS: LINK_TYPES = [
  {
    href: 'https:/github.com/hanyugeon',
    variant: 'link',
    title: 'github',
    icon: icGithub,
  },
]

const HeaderNav: NextPage = () => {
  return (
    <StyledHeaderNav>
      <StyledHeaderNavMenu>
        {NAV_MENU_CONTENTS.map((content, index) => (
          <HeaderNavItem
            key={index}
            href={content.href}
            variant={content.variant}
            title={content.title}
          />
        ))}
      </StyledHeaderNavMenu>
      <StyledHeaderNavLink>
        {NAV_LINK_CONTENTS.map((content, index) => (
          <HeaderNavItem
            key={index}
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
