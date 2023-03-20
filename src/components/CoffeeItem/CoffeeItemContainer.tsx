import { StyledCoffeeItemContainer } from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeItemContainer = ({ children }: ChildrenType) => {
  return <StyledCoffeeItemContainer>{children}</StyledCoffeeItemContainer>
}

export default CoffeeItemContainer
