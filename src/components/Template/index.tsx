'use client'

import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import useToggle from '@/hooks/useToggle'
import * as S from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const Template = ({ children }: ChildrenType) => {
  const [isSideBarOpen, toggleSideBar] = useToggle()

  return (
    <>
      <SideBar toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      <Header toggleSideBar={toggleSideBar} />
      <S.Template>{children}</S.Template>
    </>
  )
}

export default Template
