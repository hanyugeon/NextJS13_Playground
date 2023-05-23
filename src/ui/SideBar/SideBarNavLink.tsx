import Link from 'next/link'

import * as S from './styles'

import { IconGithub } from '@/assets/icons'

const SideBarNavLink = () => {
  return (
    <S.SideBarNavLinkContainer>
      <Link
        href={'https://github.com/hanyugeon'}
        aria-label={'github'}
        target="_blank"
        rel={'noreferrer'}
      >
        <IconGithub width="3rem" height="3rem" />
      </Link>
    </S.SideBarNavLinkContainer>
  )
}

export default SideBarNavLink
