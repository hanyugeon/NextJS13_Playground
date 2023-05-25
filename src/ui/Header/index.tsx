import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import * as S from './styles'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <HeaderLogo />
        <HeaderNav />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
