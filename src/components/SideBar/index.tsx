import { NextPage } from 'next/types'
import SideBarNav from './SideBarNav'
import { StyledSideBarContainer } from './styled'

const SideBar: NextPage = () => {
  return (
    <StyledSideBarContainer>
      <SideBarNav />
    </StyledSideBarContainer>
  )
}

export default SideBar
