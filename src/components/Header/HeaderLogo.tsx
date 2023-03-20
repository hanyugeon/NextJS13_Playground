import { icLogo } from '@/assets/icons'
import Image from 'next/image'
import { StyledHeaderLogo } from './styled'

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Image src={icLogo} alt="" priority={true} />
    </StyledHeaderLogo>
  )
}

export default HeaderLogo
