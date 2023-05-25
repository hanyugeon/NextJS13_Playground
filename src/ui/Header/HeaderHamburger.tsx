import { useSetRecoilState } from 'recoil'
import { sideBarAtom } from '@/stores/sideBar'

import * as S from './styles'

import { IconHamburger } from 'public/icons'

const HeaderHamburger = () => {
  const setSideBarOpen = useSetRecoilState(sideBarAtom)

  return (
    <S.HeaderHamburger aria-label={'SideBarOpen'}>
      <IconHamburger
        width="3rem"
        height="3rem"
        onClick={() => setSideBarOpen(true)}
      />
    </S.HeaderHamburger>
  )
}

export default HeaderHamburger
