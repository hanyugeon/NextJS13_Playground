import { useSetRecoilState } from 'recoil'
import { sideBarAtom } from '@/stores/sideBar'

import * as S from './styles'

import { IconClose } from 'public/icons'

const SideBarCloseButton = () => {
  const setSideBarClose = useSetRecoilState(sideBarAtom)

  return (
    <S.SideBarCloseButton aria-label={'SideBarClose'}>
      <IconClose
        width="2.2rem"
        height="2.2rem"
        onClick={() => setSideBarClose(false)}
      />
    </S.SideBarCloseButton>
  )
}

export default SideBarCloseButton
