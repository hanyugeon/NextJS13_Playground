import Link from 'next/link'

import * as S from './styles'

import { IconLogo } from '@/assets/icons'

const HeaderLogo = () => {
  return (
    <S.HeaderLogo>
      <Link href="/" aria-label={'MainLogo'}>
        <IconLogo width="24.4rem" height="9rem" />
      </Link>
    </S.HeaderLogo>
  )
}

export default HeaderLogo
