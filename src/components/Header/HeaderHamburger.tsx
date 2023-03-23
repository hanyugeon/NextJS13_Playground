import { icHamburger } from '@/assets/icons'
import Image from 'next/image'
import { StyledHeaderHamburger } from './styled'

/**
 * next/image에 width height값 설정을 안해도 에러가 안난다?
 * 왜그럴까
 * 상위 컴포넌트에서 Image의 크기를 명시하면 안나는것 같음
 */

interface HeaderHamburgerTypes {
  toggleSideBar: () => void
}

const HeaderHamburger = ({ toggleSideBar }: HeaderHamburgerTypes) => {
  return (
    <StyledHeaderHamburger aria-label={'NavigationToggle'}>
      <Image
        onClick={toggleSideBar}
        width={30}
        height={30}
        src={icHamburger}
        alt=""
      />
    </StyledHeaderHamburger>
  )
}

export default HeaderHamburger
