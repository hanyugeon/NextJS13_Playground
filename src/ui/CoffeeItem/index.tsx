'use client'

import { useStateToggle } from '@/hooks'

import CoffeeItemBadge from './CoffeeItemBadge'
import CoffeeItemCheckBox from './CoffeeItemCheckBox'
import CoffeeItemImage from './CoffeeItemImage'
import CoffeeItemTitle from './CoffeeItemTitle'
import * as S from './styles'

interface CoffeeTypes {
  coffeeTitle: string
  coffeeImage: string
}

const CoffeeItem = ({ coffeeTitle, coffeeImage }: CoffeeTypes) => {
  const [isBestSeller, setIsBestSeller] = useStateToggle(false)
  const [isSoldOut, setIsSoldOut] = useStateToggle(false)

  return (
    <S.CoffeeItemContainer>
      <CoffeeItemBadge isBestSeller={isBestSeller} />
      <CoffeeItemImage coffeeImage={coffeeImage} />
      <CoffeeItemTitle coffeeTitle={coffeeTitle} isSoldOut={isSoldOut} />
      <CoffeeItemCheckBox
        ariaLabel={'MenuOptionCheckBox'}
        isChecked={isBestSeller}
        setIsChecked={setIsBestSeller}
      />
      <CoffeeItemCheckBox
        ariaLabel={'MenuOptionCheckBox'}
        isChecked={isSoldOut}
        setIsChecked={setIsSoldOut}
      />
    </S.CoffeeItemContainer>
  )
}

export default CoffeeItem
