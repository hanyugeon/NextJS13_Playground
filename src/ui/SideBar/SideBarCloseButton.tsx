import * as S from './styles'

import { IconClose } from 'public/icons'

type SideBarCloseButtonTypes = {
  onClose: () => void
}

const SideBarCloseButton = ({ onClose }: SideBarCloseButtonTypes) => {
  return (
    <S.SideBarCloseButton aria-label={'SideBarClose'}>
      <IconClose width="2.2rem" height="2.2rem" onClick={onClose} />
    </S.SideBarCloseButton>
  )
}

export default SideBarCloseButton
