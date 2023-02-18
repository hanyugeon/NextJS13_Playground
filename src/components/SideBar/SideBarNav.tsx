'use client'

import { icGithub } from '@/assets/icons'
import { NextPage } from 'next/types'
import SideBarCloseButton from './SideBarCloseButton'
import SideBarNavItem from './SideBarNavItem'
import {
  StyledSideBarNav,
  StyledSideBarNavLink,
  StyledSideBarNavMenu,
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

const SideBarNav: NextPage = () => {
  return (
    <StyledSideBarNav>
      <SideBarCloseButton />
      <StyledSideBarNavMenu>
        {NAV_MENU_CONTENTS.map((content, index) => (
          <SideBarNavItem
            key={index}
            href={content.href}
            variant={content.variant}
            title={content.title}
          />
        ))}
        <StyledSideBarNavLink>
          {NAV_LINK_CONTENTS.map((content, index) => (
            <SideBarNavItem
              key={index}
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
