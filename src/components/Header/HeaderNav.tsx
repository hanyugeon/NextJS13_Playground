'use client'

import { icGithub } from '@/assets/icons'
import { NextPage } from 'next/types'
import HeaderNavItem from './HeaderNavItem'
import { StyledHeaderNav, StyledHeaderNavLink, StyledHeaderNavMenu } from './styled'

const HeaderNav: NextPage = () => {
  return (
    <StyledHeaderNav>
      <StyledHeaderNavMenu>
        <HeaderNavItem href="/" variant="menu" title="커피 목록" />
        <HeaderNavItem href="/tech" variant="menu" title="기술 스택" />
        <HeaderNavItem href="/about" variant="menu" title="만든 계기" />
      </StyledHeaderNavMenu>
      <StyledHeaderNavLink>
        <HeaderNavItem href="https://github.com/hanyugeon" variant="link" icon={icGithub} />
      </StyledHeaderNavLink>
    </StyledHeaderNav>
  )
}

export default HeaderNav
