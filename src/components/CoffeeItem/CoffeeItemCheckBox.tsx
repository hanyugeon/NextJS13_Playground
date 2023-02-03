'use client'

import { NextPage } from 'next/types';
import { StyledCoffeeItemCheckBox, StyledCoffeeItemCheckBoxElement } from './styled';

interface PropTypes {
  isChecked: boolean
}

const CoffeeItemCheckBox: NextPage<PropTypes> = (props) => {
  return (
    <StyledCoffeeItemCheckBox>
      <StyledCoffeeItemCheckBoxElement isChecked={props.isChecked}/>
    </StyledCoffeeItemCheckBox>
  )
}

export default CoffeeItemCheckBox