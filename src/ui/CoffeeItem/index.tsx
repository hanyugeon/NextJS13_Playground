'use client'

import { useStateToggle } from '@/hooks'
import CoffeeItemCheckBox from './CoffeeItemCheckBox'
import CoffeeItemContainer from './CoffeeItemContainer'
import CoffeeItemContent from './CoffeeItemContent'
import CoffeeItemHottest from './CoffeeItemHottest'

interface CoffeeTypes {
  coffeeTitle: string
  coffeeImage: string
}

const CoffeeItem = ({ coffeeTitle, coffeeImage }: CoffeeTypes) => {
  const [isHottest, setIsHottest] = useStateToggle(true)
  const [isSoldOut, setIsSoldOut] = useStateToggle(false)

  return (
    <CoffeeItemContainer>
      <CoffeeItemHottest isHottest={isHottest} coffeeImage={coffeeImage} />
      <CoffeeItemContent coffeeTitle={coffeeTitle} isSoldOut={isSoldOut} />
      <CoffeeItemCheckBox isChecked={isHottest} onClick={setIsHottest} />
      <CoffeeItemCheckBox isChecked={isSoldOut} onClick={setIsSoldOut} />
    </CoffeeItemContainer>
  )
}

export default CoffeeItem
