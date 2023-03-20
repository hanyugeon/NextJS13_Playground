import { NextPage } from 'next/types'
import HeaderContainer from './HeaderContainer'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'

const Header: NextPage = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderNav />
    </HeaderContainer>
  )
}

export default Header
