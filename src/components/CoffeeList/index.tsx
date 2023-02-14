'use client'

import { NextPage } from 'next/types'
import CoffeeListWrapper from './CoffeeListWrapper'
import CoffeeListHeader from './CoffeeListHeader'
import { StyledCoffeeListContainer } from './styled'

interface PropTypes {
  children: React.ReactNode
}

const CoffeeList: NextPage<PropTypes> = ({ children }) => {
  return (
    <StyledCoffeeListContainer>
      <CoffeeListHeader />
      <CoffeeListWrapper>{children}</CoffeeListWrapper>
    </StyledCoffeeListContainer>
  )
}

export default CoffeeList
