import { icClose } from '@/assets/icons'
import Image from 'next/image'
import { StyledSideBarCloseButton } from './styled'

/**
 * @todo
 * 여기에는 next/image의 크기를 따로 지정해준게 없는데
 * 왜 에러가 나지 않는걸까? 알아보기
 */

const SideBarCloseButton = () => {
  return (
    <StyledSideBarCloseButton aria-label={'NavigationClose'}>
      <Image src={icClose} alt="" />
    </StyledSideBarCloseButton>
  )
}

export default SideBarCloseButton
