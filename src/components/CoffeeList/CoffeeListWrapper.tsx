'use client'

import { NextPage } from 'next/types';
import { StyledCoffeeListWrapper } from './styled';

interface PropTypes {
  children: React.ReactNode
}

const CoffeeListWrapper: NextPage<PropTypes> = ({ children }) => {
  return (
    <StyledCoffeeListWrapper>
      {children}
    </StyledCoffeeListWrapper>
  )
}

export default CoffeeListWrapper
