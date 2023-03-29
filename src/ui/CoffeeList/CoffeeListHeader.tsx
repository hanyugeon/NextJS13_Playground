import {
  StyledCoffeeListHeaderContainer,
  StyledCoffeeListHeaderTable,
} from './styled'

/**
 * @todo
 * constants 정리하기
 */
const TABLE_CONTENTS: string[] = ['인기', '메뉴', '인기 토글', '품절 토글']

const CoffeeListHeader = () => {
  return (
    <StyledCoffeeListHeaderContainer>
      {TABLE_CONTENTS.map((content) => (
        <StyledCoffeeListHeaderTable key={content}>
          {content}
        </StyledCoffeeListHeaderTable>
      ))}
    </StyledCoffeeListHeaderContainer>
  )
}

export default CoffeeListHeader
