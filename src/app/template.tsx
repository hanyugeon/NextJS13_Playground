import Header from '@/components/Header'
import { StyledTemplate } from '@/components/Template'
import { NextPage } from 'next/types'

interface PropTypes {
  children: React.ReactNode
}

const Template: NextPage<PropTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <StyledTemplate>{children}</StyledTemplate>
    </>
  )
}

export default Template
