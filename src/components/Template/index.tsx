'use client'

import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { useClickAway, useKeyPress, useToggle } from '@/hooks'
import { useCallback, useEffect, useRef } from 'react'
import * as S from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const Template = ({ children }: ChildrenType) => {
  const [isSideBarOpen, toggleSideBar] = useToggle()
  const escKeyPressed = useKeyPress('Escape')
  const sideBarRef = useRef<HTMLDivElement>(null)

  useClickAway(isSideBarOpen, sideBarRef, toggleSideBar)

  useEffect(() => {
    if (isSideBarOpen && escKeyPressed) {
      return toggleSideBar
    }
  }, [isSideBarOpen, toggleSideBar, escKeyPressed])

  return (
    <>
      <SideBar
        sideBarRef={sideBarRef}
        toggleSideBar={toggleSideBar}
        isSideBarOpen={isSideBarOpen}
      />
      <Header toggleSideBar={toggleSideBar} />
      <S.Template>{children}</S.Template>
    </>
  )
}

export default Template
