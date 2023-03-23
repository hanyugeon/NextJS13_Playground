import HeaderContainer from './HeaderContainer'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'

interface HeaderTypes {
  toggleSideBar: () => void
}

const Header = ({ toggleSideBar }: HeaderTypes) => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderNav toggleSideBar={toggleSideBar} />
    </HeaderContainer>
  )
}

export default Header
