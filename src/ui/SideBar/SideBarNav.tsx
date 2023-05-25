import Link from 'next/link'

import SideBarNavLink from './SideBarNavLink'
import * as S from './styles'

const SideBarNav = () => {
  return (
    <S.SideBarNavContainer>
      <Link href={'/'} title={'커피 목록'} aria-label={'커피 목록'}>
        {'커피 목록'}
      </Link>
      <Link href={'/tech'} title={'기술 스택'} aria-label={'기술 스택'}>
        {'기술 스택'}
      </Link>
      <Link href={'/about'} title={'만든 계기'} aria-label={'만든 계기'}>
        {'만든 계기'}
      </Link>
      <SideBarNavLink />
    </S.SideBarNavContainer>
  )
}

export default SideBarNav
