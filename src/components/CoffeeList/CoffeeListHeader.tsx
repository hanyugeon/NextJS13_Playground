import { NextPage } from 'next/types'
import {
  StyledCoffeeListHeaderContainer,
  StyledCoffeeListHeaderTable,
} from './styled'

const TABLE_CONTENTS: string[] = ['인기', '메뉴', '인기 토글', '품절 토글']

const CoffeeListHeader: NextPage = () => {
  return (
    <StyledCoffeeListHeaderContainer>
      {TABLE_CONTENTS.map((content: string) => (
        <StyledCoffeeListHeaderTable key={content}>
          {content}
        </StyledCoffeeListHeaderTable>
      ))}
    </StyledCoffeeListHeaderContainer>
  )
}

export default CoffeeListHeader
