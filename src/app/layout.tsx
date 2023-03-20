import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { StyledTemplate } from '@/components/Template'
import { notoSansKrFont } from '@/app/fonts'
import GlobalStyle from '@/styles/GlobalStyle'

type ChildrenType = {
  children: React.ReactNode
}

const RootLayout = ({ children }: ChildrenType) => {
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
