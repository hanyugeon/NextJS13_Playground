import { StyledHeaderContainer, StyledHeaderWrapper } from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const HeaderContainer = ({ children }: ChildrenType) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>{children}</StyledHeaderContainer>
    </StyledHeaderWrapper>
  )
}

export default HeaderContainer
