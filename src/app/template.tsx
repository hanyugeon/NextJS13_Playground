import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { StyledTemplate } from '@/components/Template'
import { NextPage } from 'next/types'

interface PropTypes {
  children: React.ReactNode
}

const Template: NextPage<PropTypes> = ({ children }) => {
  return (
    <>
      <SideBar />
      <Header />
      <StyledTemplate>{children}</StyledTemplate>
    </>
  )
}

export default Template
