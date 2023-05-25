'use client'

import { RecoilRoot } from 'recoil'

type ChildrenType = {
  children: React.ReactNode
}

const RecoilProvider = ({ children }: ChildrenType) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilProvider
