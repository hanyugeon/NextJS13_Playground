import { icHottest } from '@/assets/icons'
import Image from 'next/image'
import { StyledCoffeeItemHottest } from './styled'

interface CoffeeItemTypes {
  isHottest: boolean
}

const CoffeeItemHottest = ({ isHottest }: CoffeeItemTypes) => {
  return (
    <StyledCoffeeItemHottest isHottest={isHottest}>
      <Image src={icHottest} alt="" />
    </StyledCoffeeItemHottest>
  )
}

export default CoffeeItemHottest
