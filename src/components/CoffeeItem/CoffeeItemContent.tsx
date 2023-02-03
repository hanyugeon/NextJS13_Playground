'use client'

import { NextPage } from 'next/types';
import { StyledCoffeeItemContent } from './styled';

interface PropTypes {
  title: string
}

const CoffeeItemContent: NextPage<PropTypes> = (props) => {
  return (
    <StyledCoffeeItemContent>
      {props.title}
    </StyledCoffeeItemContent>
  )
}

export default CoffeeItemContent
