import * as S from './styles'

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeList = ({ children }: ChildrenType) => {
  return (
    <S.CoffeeListContainer>
      <S.CoffeeListHeader>
        <S.CoffeeListHeaderTable>{'Coffee & Beverage'}</S.CoffeeListHeaderTable>
        <S.CoffeeListHeaderTable>{'Best Seller'}</S.CoffeeListHeaderTable>
        <S.CoffeeListHeaderTable>{'Sold Out'}</S.CoffeeListHeaderTable>
      </S.CoffeeListHeader>
      <S.CoffeeListBody>{children}</S.CoffeeListBody>
    </S.CoffeeListContainer>
  )
}

export default CoffeeList
