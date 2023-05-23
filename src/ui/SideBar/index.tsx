import { RefObject } from 'react'

import SideBarCloseButton from './SideBarCloseButton'
import SideBarNav from './SideBarNav'
import * as S from './styles'

type SideBarTypes = {
  onClose: () => void
  isSideBarOpen: boolean
  sideBarRef: RefObject<HTMLDivElement>
}

const SideBar = ({ onClose, isSideBarOpen, sideBarRef }: SideBarTypes) => {
  return (
    <S.SideBarWrapper isOpen={isSideBarOpen}>
      <S.SideBarContainer ref={sideBarRef}>
        <SideBarCloseButton onClose={onClose} />
        <SideBarNav />
      </S.SideBarContainer>
    </S.SideBarWrapper>
  )
}

export default SideBar
