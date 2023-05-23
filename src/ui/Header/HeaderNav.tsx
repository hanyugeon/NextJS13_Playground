import HeaderNavMenu from './HeaderNavMenu'
import HeaderNavLink from './HeaderNavLink'
import HeaderHamburger from './HeaderHamburger'
import * as S from './styles'

type HeaderNavTypes = {
  onOpen: () => void
}

const HeaderNav = ({ onOpen }: HeaderNavTypes) => {
  return (
    <S.HeaderNav>
      <HeaderNavMenu />
      <HeaderNavLink />
      <HeaderHamburger onOpen={onOpen} />
    </S.HeaderNav>
  )
}

export default HeaderNav
