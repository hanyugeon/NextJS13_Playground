import * as S from './styles'

type CoffeeItemTitleTypes = {
  coffeeTitle: string
  isSoldOut: boolean
}

const CoffeeItemTitle = ({ coffeeTitle, isSoldOut }: CoffeeItemTitleTypes) => {
  return (
    <S.CoffeeItemTitle isSoldOut={isSoldOut}>
      {coffeeTitle ? coffeeTitle : '불러올 수 없음'}
    </S.CoffeeItemTitle>
  )
}

export default CoffeeItemTitle
