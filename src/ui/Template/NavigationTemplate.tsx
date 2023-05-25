'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { useSetRecoilState } from 'recoil'
import { sideBarAtom } from '@/stores/sideBar'

import { useClickAway, useKeyPress } from '@/hooks'

import Header from '@/ui/Header'
import SideBar from '@/ui/SideBar'

const NavigationTemplate = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const escKeyPressed = useKeyPress('Escape')
  const sideBarRef = useRef<HTMLDivElement>(null)

  const setSideBarOpen = useSetRecoilState(sideBarAtom)

  useEffect(() => {
    return setSideBarOpen(false)
  }, [pathname, searchParams])

  useEffect(() => {
    if (escKeyPressed) return setSideBarOpen(false)
  }, [escKeyPressed])

  useClickAway(sideBarRef, () => setSideBarOpen(false))

  return (
    <>
      <SideBar sideBarRef={sideBarRef} />
      <Header />
    </>
  )
}

export default NavigationTemplate
