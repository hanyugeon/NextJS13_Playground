import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import * as S from './styles'

type HeaderTypes = {
  onOpen: () => void
}

const Header = ({ onOpen }: HeaderTypes) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <HeaderLogo />
        <HeaderNav onOpen={onOpen} />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
