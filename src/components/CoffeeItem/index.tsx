'use client'

import { useToggle } from '@/hooks'
import CoffeeItemCheckBox from './CoffeeItemCheckBox'
import CoffeeItemContainer from './CoffeeItemContainer'
import CoffeeItemContent from './CoffeeItemContent'
import CoffeeItemHottest from './CoffeeItemHottest'

interface CoffeeTypes {
  coffeeTitle: string
}

const CoffeeItem = ({ coffeeTitle }: CoffeeTypes) => {
  const [isHottest, setIsHottest] = useToggle()
  const [isSoldOut, setIsSoldOut] = useToggle()

  return (
    <CoffeeItemContainer>
      <CoffeeItemHottest isHottest={isHottest} />
      <CoffeeItemContent coffeeTitle={coffeeTitle} isSoldOut={isSoldOut} />
      <CoffeeItemCheckBox isChecked={isHottest} onClick={setIsHottest} />
      <CoffeeItemCheckBox isChecked={isSoldOut} onClick={setIsSoldOut} />
    </CoffeeItemContainer>
  )
}

export default CoffeeItem
