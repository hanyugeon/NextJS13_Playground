import { icClose } from '@/assets/icons'
import Image from 'next/image'
import { NextPage } from 'next/types'
import { StyledSideBarCloseButton } from './styled'

const SideBarCloseButton: NextPage = () => {
  return (
    <StyledSideBarCloseButton aria-label={'NavigationClose'}>
      <Image src={icClose} alt="" />
    </StyledSideBarCloseButton>
  )
}

export default SideBarCloseButton
