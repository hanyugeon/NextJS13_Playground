import * as S from './styles'

const CoffeeListHeader = () => {
  return (
    <S.CoffeeListHeader>
      <S.CoffeeListHeaderTable>{'Coffee & Beverage'}</S.CoffeeListHeaderTable>
      <S.CoffeeListHeaderTable>{'Best Seller'}</S.CoffeeListHeaderTable>
      <S.CoffeeListHeaderTable>{'Sold Out'}</S.CoffeeListHeaderTable>
    </S.CoffeeListHeader>
  )
}

export default CoffeeListHeader
