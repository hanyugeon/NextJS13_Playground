import { StyledCoffeeListWrapper } from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeListWrapper = ({ children }: ChildrenType) => {
  return <StyledCoffeeListWrapper>{children}</StyledCoffeeListWrapper>
}

export default CoffeeListWrapper
