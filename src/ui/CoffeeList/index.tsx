import CoffeeListHeader from './CoffeeListHeader'
import CoffeeListWrapper from './CoffeeListWrapper'
import { StyledCoffeeListContainer } from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeList = ({ children }: ChildrenType) => {
  return (
    <StyledCoffeeListContainer>
      <CoffeeListHeader />
      <CoffeeListWrapper>{children}</CoffeeListWrapper>
    </StyledCoffeeListContainer>
  )
}

export default CoffeeList
