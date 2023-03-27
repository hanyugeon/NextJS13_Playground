'use client'

import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import useKeyPress from '@/hooks/useKeyPress'
import useToggle from '@/hooks/useToggle'
import { useEffect } from 'react'
import * as S from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const Template = ({ children }: ChildrenType) => {
  const [isSideBarOpen, toggleSideBar] = useToggle()
  const escKeyPressed = useKeyPress('Escape')

  useEffect(() => {
    if (isSideBarOpen && escKeyPressed) {
      return toggleSideBar()
    }
  }, [isSideBarOpen, toggleSideBar, escKeyPressed])

  return (
    <>
      <SideBar toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      <Header toggleSideBar={toggleSideBar} />
      <S.Template>{children}</S.Template>
    </>
  )
}

export default Template
