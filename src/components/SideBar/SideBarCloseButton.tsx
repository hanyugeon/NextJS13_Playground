import { icClose } from '@/assets/icons'
import Image from 'next/image'
import { StyledSideBarCloseButton } from './styled'

const SideBarCloseButton = () => {
  return (
    <StyledSideBarCloseButton aria-label={'SideBarCloseButton'}>
      <Image width={22} height={22} src={icClose} alt="SideBarCloseIcon" />
    </StyledSideBarCloseButton>
  )
}

export default SideBarCloseButton
