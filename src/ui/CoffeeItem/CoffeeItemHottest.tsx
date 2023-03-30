import Image from 'next/image'
import * as S from './styled'

interface CoffeeItemTypes {
  isHottest: boolean
  coffeeImage: string
}

const CoffeeItemHottest = ({ isHottest, coffeeImage }: CoffeeItemTypes) => {
  return (
    <S.CoffeeItemHottest isHottest={isHottest}>
      <Image width={60} height={60} src={coffeeImage} alt="" />
    </S.CoffeeItemHottest>
  )
}

export default CoffeeItemHottest
