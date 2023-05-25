import { RefObject } from 'react'

import { useRecoilValue } from 'recoil'
import { sideBarAtom } from '@/stores/sideBar'

import SideBarCloseButton from './SideBarCloseButton'
import SideBarNav from './SideBarNav'
import * as S from './styles'

type SideBarTypes = {
  sideBarRef: RefObject<HTMLDivElement>
}

const SideBar = ({ sideBarRef }: SideBarTypes) => {
  const isSideBarOpen = useRecoilValue(sideBarAtom)

  return (
    <S.SideBarWrapper isOpen={isSideBarOpen}>
      <S.SideBarContainer ref={sideBarRef}>
        <SideBarCloseButton />
        <SideBarNav />
      </S.SideBarContainer>
    </S.SideBarWrapper>
  )
}

export default SideBar
