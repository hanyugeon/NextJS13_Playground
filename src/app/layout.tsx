import { notoSansKrFont } from '@/app/fonts'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { StyledTemplate } from '@/components/Template'
import GlobalStyle from '@/styles/GlobalStyle'
import { NextPage } from 'next/types'

interface PropTpyes {
  children: React.ReactNode
}

const RootLayout: NextPage<PropTpyes> = ({ children }) => {
  return (
    <html lang="ko-KR" className={`${notoSansKrFont.className}`}>
      <GlobalStyle />
      <head />
      <body>
        <SideBar />
        <Header />
        <StyledTemplate>{children}</StyledTemplate>
      </body>
    </html>
  )
}

export default RootLayout
