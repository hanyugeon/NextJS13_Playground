import { IconClose, IconGithub } from '@/assets/icons'
import Link from 'next/link'
import { RefObject } from 'react'
import * as S from './styles'

interface SideBarTypes {
  onClose: () => void
  isSideBarOpen: boolean
  sideBarRef: RefObject<HTMLDivElement>
}

const SideBar = ({ onClose, isSideBarOpen, sideBarRef }: SideBarTypes) => {
  return (
    <S.SideBarWrapper isOpen={isSideBarOpen}>
      <S.SideBar ref={sideBarRef}>
        <S.SideBarCloseButton aria-label={'SideBarClose'}>
          <IconClose width="2.2rem" height="2.2rem" onClick={onClose} />
        </S.SideBarCloseButton>
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
          <S.SideBarNavLinkContainer>
            <Link
              href={'https://github.com/hanyugeon'}
              aria-label={'github'}
              target="_blank"
              rel={'noreferrer'}
            >
              <IconGithub width="3rem" height="3rem" />
            </Link>
          </S.SideBarNavLinkContainer>
        </S.SideBarNavContainer>
      </S.SideBar>
    </S.SideBarWrapper>
  )
}

export default SideBar
