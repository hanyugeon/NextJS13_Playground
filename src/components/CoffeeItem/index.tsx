'use client'

import { NextPage } from 'next/types'
import CoffeeItemCheckBox from './CoffeeItemCheckBox'
import CoffeeItemContainer from './CoffeeItemContainer'
import CoffeeItemContent from './CoffeeItemContent'
import CoffeeItemHottest from './CoffeeItemHottest'

interface CoffeeTypes {
  title: string
  isHottest: boolean
}

const CoffeeItem: NextPage<CoffeeTypes> = (props) => {
  return (
    <CoffeeItemContainer>
      <CoffeeItemHottest isHottest={props.isHottest} />
      <CoffeeItemContent title={props.title} />
      <CoffeeItemCheckBox isChecked={true} />
      <CoffeeItemCheckBox isChecked={false} />
    </CoffeeItemContainer>
  )
}

export default CoffeeItem
