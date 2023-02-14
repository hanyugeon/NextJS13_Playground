'use client'

import useToggle from '@/hooks/useToggle'
import { NextPage } from 'next/types'
import CoffeeItemCheckBox from './CoffeeItemCheckBox'
import CoffeeItemContainer from './CoffeeItemContainer'
import CoffeeItemContent from './CoffeeItemContent'
import CoffeeItemHottest from './CoffeeItemHottest'

interface CoffeeTypes {
  title: string
}

const CoffeeItem: NextPage<CoffeeTypes> = (props) => {
  const [isHottest, setIsHottest] = useToggle()
  const [isSoldOut, setIsSoldOut] = useToggle()

  return (
    <CoffeeItemContainer>
      <CoffeeItemHottest isHottest={isHottest} />
      <CoffeeItemContent title={props.title} isSoldOut={isSoldOut} />
      <CoffeeItemCheckBox isChecked={isHottest} onClick={setIsHottest} />
      <CoffeeItemCheckBox isChecked={isSoldOut} onClick={setIsSoldOut} />
    </CoffeeItemContainer>
  )
}

export default CoffeeItem
