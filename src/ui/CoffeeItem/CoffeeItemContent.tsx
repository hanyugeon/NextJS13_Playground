import { StyledCoffeeItemContent } from './styled'

interface CoffeeItemTypes {
  coffeeTitle: string
  isSoldOut: boolean
}

const CoffeeItemContent = ({ coffeeTitle, isSoldOut }: CoffeeItemTypes) => {
  return (
    <StyledCoffeeItemContent isSoldOut={isSoldOut}>
      {coffeeTitle}
    </StyledCoffeeItemContent>
  )
}

export default CoffeeItemContent
