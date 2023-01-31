'use client'

import { icGithub } from '@/assets/icons'
import Image from 'next/image'
import { NextPage } from 'next/types'
import { StyledHeaderNav, StyledHeaderNavMenuItem, StyledHeaderNavLink, StyledHeaderNavMenu } from './styled'

const HeaderNav: NextPage = () => {
  return (
    <StyledHeaderNav>
      <StyledHeaderNavMenu>
        <StyledHeaderNavMenuItem>커피 목록</StyledHeaderNavMenuItem>
        <StyledHeaderNavMenuItem>기술 스택</StyledHeaderNavMenuItem>
        <StyledHeaderNavMenuItem>만든 계기</StyledHeaderNavMenuItem>
      </StyledHeaderNavMenu>
      <StyledHeaderNavLink>
        <Image src={icGithub} alt="" />
      </StyledHeaderNavLink>
    </StyledHeaderNav>
  )
}

export default HeaderNav
