'use client'

import { icBestseller } from '@/assets/icons'
import { useStateToggle } from '@/hooks'
import Image from 'next/image'
import * as S from './styled'

interface CoffeeTypes {
  coffeeTitle: string
  coffeeImage: string
}

const CoffeeItem = ({ coffeeTitle, coffeeImage }: CoffeeTypes) => {
  const [isBestSeller, setIsBestSeller] = useStateToggle(false)
  const [isSoldOut, setIsSoldOut] = useStateToggle(false)

  return (
    <S.CoffeeItemContainer>
      <S.CoffeeItemBadgeWrapper isBestSeller={isBestSeller}>
        <Image
          width={20}
          height={20}
          src={icBestseller}
          alt="BestSellerBadge"
        />
      </S.CoffeeItemBadgeWrapper>
      <S.CoffeeItemImageWrapper>
        <Image width={60} height={60} src={coffeeImage} alt="BeverageImage" />
      </S.CoffeeItemImageWrapper>
      <S.CoffeeItemTitle isSoldOut={isSoldOut}>{coffeeTitle}</S.CoffeeItemTitle>
      <S.CoffeeItemCheckBox
        aria-label={'MenuOptionCheckBox'}
        isChecked={isBestSeller}
        onClick={setIsBestSeller}
      />
      <S.CoffeeItemCheckBox
        aria-label={'MenuOptionCheckBox'}
        isChecked={isSoldOut}
        onClick={setIsSoldOut}
      />
    </S.CoffeeItemContainer>
  )
}

export default CoffeeItem
