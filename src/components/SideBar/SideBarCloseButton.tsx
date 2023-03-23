import { icClose } from '@/assets/icons'
import Image from 'next/image'
import { StyledSideBarCloseButton } from './styled'

interface SideBarCloseButtonTypes {
  toggleSideBar: () => void
}

const SideBarCloseButton = ({ toggleSideBar }: SideBarCloseButtonTypes) => {
  return (
    <StyledSideBarCloseButton aria-label={'SideBarCloseButton'}>
      <Image
        width={22}
        height={22}
        onClick={toggleSideBar}
        src={icClose}
        alt="SideBarCloseIcon"
      />
    </StyledSideBarCloseButton>
  )
}

export default SideBarCloseButton
