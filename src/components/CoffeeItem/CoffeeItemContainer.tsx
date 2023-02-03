'use client'

import { NextPage } from 'next/types';
import { StyledCoffeeItemContainer } from './styled';

interface PropTypes {
  children: React.ReactNode
}

const CoffeeItemContainer: NextPage<PropTypes> = ({children}) => {
  return (
    <StyledCoffeeItemContainer>
      {children}
    </StyledCoffeeItemContainer>
  )
}

export default CoffeeItemContainer
