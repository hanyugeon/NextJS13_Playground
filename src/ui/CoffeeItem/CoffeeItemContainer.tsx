import * as S from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const CoffeeItemContainer = ({ children }: ChildrenType) => {
  return <S.CoffeeItemContainer>{children}</S.CoffeeItemContainer>
}

export default CoffeeItemContainer
