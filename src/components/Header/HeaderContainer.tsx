import { NextPage } from 'next/types'
import { StyledHeaderContainer, StyledHeaderWrapper } from './styled'

interface PropTypes {
  children: React.ReactNode
}

const HeaderContainer: NextPage<PropTypes> = ({ children }) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>{children}</StyledHeaderContainer>
    </StyledHeaderWrapper>
  )
}

export default HeaderContainer
