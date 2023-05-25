import HeaderNavMenu from './HeaderNavMenu'
import HeaderNavLink from './HeaderNavLink'
import HeaderHamburger from './HeaderHamburger'
import * as S from './styles'

const HeaderNav = () => {
  return (
    <S.HeaderNav>
      <HeaderNavMenu />
      <HeaderNavLink />
      <HeaderHamburger />
    </S.HeaderNav>
  )
}

export default HeaderNav
