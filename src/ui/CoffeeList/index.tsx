import CoffeeListHeader from './CoffeeListHeader'
import * as S from './styles'

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeList = ({ children }: ChildrenType) => {
  return (
    <S.CoffeeListContainer>
      <CoffeeListHeader />
      <S.CoffeeListBody>{children}</S.CoffeeListBody>
    </S.CoffeeListContainer>
  )
}

export default CoffeeList
