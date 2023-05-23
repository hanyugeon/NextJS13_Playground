import * as S from './styles'

import { IconHamburger } from '@/assets/icons'

type HeaderHamburgerTypes = {
  onOpen: () => void
}

const HeaderHamburger = ({ onOpen }: HeaderHamburgerTypes) => {
  return (
    <S.HeaderHamburger aria-label={'SideBarOpen'}>
      <IconHamburger width="3rem" height="3rem" onClick={onOpen} />
    </S.HeaderHamburger>
  )
}

export default HeaderHamburger
