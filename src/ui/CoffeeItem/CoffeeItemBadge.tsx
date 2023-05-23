import { IconBestseller } from '@/assets/icons'
import * as S from './styles'

type CoffeeItemBadgeTypes = {
  isBestSeller: boolean
}

const CoffeeItemBadge = ({ isBestSeller }: CoffeeItemBadgeTypes) => {
  return (
    <S.CoffeeItemBadgeWrapper isBestSeller={isBestSeller}>
      <IconBestseller width="2rem" height="2rem" alt="BestSellerBadge" />
    </S.CoffeeItemBadgeWrapper>
  )
}

export default CoffeeItemBadge
