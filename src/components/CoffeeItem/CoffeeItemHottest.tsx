'use client'

import { icHottest } from '@/assets/icons';
import Image from 'next/image';
import { NextPage } from 'next/types';
import { StyledCoffeeItemHottest } from './styled';

interface PropTypes {
  isHottest: boolean
}

const CoffeeItemHottest: NextPage<PropTypes> = (props) => {
  return (
    <StyledCoffeeItemHottest isHottest={props.isHottest}>
      <Image src={icHottest} alt="" />
    </StyledCoffeeItemHottest>
  )
}

export default CoffeeItemHottest
