import { IconGithub, IconHamburger, IconLogo } from '@/assets/icons'
import Link from 'next/link'
import * as S from './styles'

interface HeaderTypes {
  onOpen: () => void
}

const Header = ({ onOpen }: HeaderTypes) => {
  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.HeaderLogo>
          <Link href="/" aria-label={'MainLogo'}>
            <IconLogo width="24.4rem" height="9rem" />
          </Link>
        </S.HeaderLogo>
        <S.HeaderNav>
          <S.HeaderNavMenu>
            <Link href={'/'} title={'커피 목록'} aria-label={'커피 목록'}>
              {'커피 목록'}
            </Link>
            <Link href={'/tech'} title={'기술 스택'} aria-label={'기술 스택'}>
              {'기술 스택'}
            </Link>
            <Link href={'/about'} title={'만든 계기'} aria-label={'만든 계기'}>
              {'만든 계기'}
            </Link>
          </S.HeaderNavMenu>
          <S.HeaderNavLink>
            <Link
              href={'https://github.com/hanyugeon'}
              aria-label={'github'}
              target="_blank"
              rel={'noreferrer'}
            >
              <IconGithub width="3rem" height="3rem" />
            </Link>
          </S.HeaderNavLink>
          <S.HeaderHamburger aria-label={'SideBarOpen'}>
            <IconHamburger width="3rem" height="3rem" onClick={onOpen} />
          </S.HeaderHamburger>
        </S.HeaderNav>
      </S.Header>
    </S.HeaderWrapper>
  )
}

export default Header
