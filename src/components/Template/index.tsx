'use client'

import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { useState } from 'react'
import { StyledTemplate } from './styled'

type ChildrenType = {
  children: React.ReactNode
}

const Template = ({ children }: ChildrenType) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  /**
   * @todo
   * Props Drilling 때문에 정신이 혼미하다
   * 이전에 개같이 코드를 써놓은 나를 탓하자
   *
   * 일단 기능 동작하는대로 PR올리고
   * 그 다음 이슈에서는 Header와 SideBar컴포넌트를 더 리팩터링 해야겠다
   */

  return (
    <>
      <SideBar toggleSideBar={toggleSideBar} isSideBarOpen={isSideBarOpen} />
      <Header toggleSideBar={toggleSideBar} />
      <StyledTemplate>{children}</StyledTemplate>
    </>
  )
}

export default Template
