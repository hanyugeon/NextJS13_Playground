import { imgUndefinedImage } from '@/assets/images'
import Image from 'next/image'
import * as S from './styles'

type CoffeeImageTypes = {
  coffeeImage: string
}

const CoffeeItemImage = ({ coffeeImage }: CoffeeImageTypes) => {
  return (
    <S.CoffeeItemImageWrapper>
      <Image
        src={coffeeImage ? coffeeImage : imgUndefinedImage}
        alt="BeverageImage"
        width={60}
        height={60}
      />
    </S.CoffeeItemImageWrapper>
  )
}

export default CoffeeItemImage
