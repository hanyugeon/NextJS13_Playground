import Link from 'next/link'

import * as S from './styles'

import { IconGithub } from 'public/icons'

const HeaderNavLink = () => {
  return (
    <S.HeaderNavLink>
      <Link
        href={'https://github.com/hanyugeon'}
        aria-label={'github'}
        target="_blank"
        rel={'noreferrer'}
      >
        <IconGithub width="3rem" height="3rem" />
      </Link>
    </S.HeaderNavLink>
  )
}
export default HeaderNavLink
