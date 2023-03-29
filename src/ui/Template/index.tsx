'use client'

import Header from '@/ui/Header'
import SideBar from '@/ui/SideBar'
import { useClickAway, useKeyPress, useModal } from '@/hooks'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import * as S from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const Template = ({ children }: ChildrenType) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const {
    isOpen: isSideBarOpen,
    onOpen: onSideBarOpen,
    onClose: onSideBarClose,
  } = useModal(false)
  const escKeyPressed = useKeyPress('Escape')
  const sideBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return onSideBarClose
  }, [pathname, searchParams])

  useEffect(() => {
    if (escKeyPressed) return onSideBarClose
  }, [escKeyPressed])

  useClickAway(sideBarRef, onSideBarClose)

  return (
    <>
      <SideBar
        sideBarRef={sideBarRef}
        onClose={onSideBarClose}
        isSideBarOpen={isSideBarOpen}
      />
      <Header onOpen={onSideBarOpen} />
      <S.Template>{children}</S.Template>
    </>
  )
}

export default Template
