import * as S from './styles'

const TABLE_CONTENTS: string[] = [
  'Coffee & Beverage',
  'Best Seller',
  'Sold Out',
]

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeList = ({ children }: ChildrenType) => {
  return (
    <S.CoffeeListContainer>
      <S.CoffeeListHeader>
        {TABLE_CONTENTS.map((content) => (
          <S.CoffeeListHeaderTable key={content}>
            {content}
          </S.CoffeeListHeaderTable>
        ))}
      </S.CoffeeListHeader>
      <S.CoffeeListBody>{children}</S.CoffeeListBody>
    </S.CoffeeListContainer>
  )
}

export default CoffeeList
