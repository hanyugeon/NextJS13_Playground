import * as S from './styled'

interface CoffeeItemTypes {
  coffeeTitle: string
  isSoldOut: boolean
}

const CoffeeItemContent = ({ coffeeTitle, isSoldOut }: CoffeeItemTypes) => {
  return (
    <S.CoffeeItemContent isSoldOut={isSoldOut}>
      {coffeeTitle}
    </S.CoffeeItemContent>
  )
}

export default CoffeeItemContent
