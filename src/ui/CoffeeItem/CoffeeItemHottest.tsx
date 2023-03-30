import { icHottest } from '@/assets/icons'
import Image from 'next/image'
import { StyledCoffeeItemHottest } from './styled'

interface CoffeeItemTypes {
  isHottest: boolean
  coffeeImage: string
}

const CoffeeItemHottest = ({ isHottest, coffeeImage }: CoffeeItemTypes) => {
  return (
    <StyledCoffeeItemHottest isHottest={isHottest}>
      <Image width={60} height={60} src={coffeeImage} alt="" />
    </StyledCoffeeItemHottest>
  )
}

export default CoffeeItemHottest
