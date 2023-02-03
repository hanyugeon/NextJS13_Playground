'use client'

import { NextPage } from 'next/types';
import { StyledCoffeeListHeaderContainer, StyledCoffeeListHeaderTable } from './styled';

const TABLE_CONTENTS: string[] = [
  '인기',
  '메뉴',
  '품절 토글',
  '인기 토글',
]

const CoffeeListHeader: NextPage = () => {
  return (
      <StyledCoffeeListHeaderContainer>
        {TABLE_CONTENTS.map(
          (content: string, index: number) => 
          <StyledCoffeeListHeaderTable key={index}>
            {content}
          </StyledCoffeeListHeaderTable>
        )}
      </StyledCoffeeListHeaderContainer>
  )
}

export default CoffeeListHeader
