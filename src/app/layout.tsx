import { notoSansKrFont } from '@/styles/fonts'
import Template from '@/ui/Template'
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
        <Template>{children}</Template>
      </body>
    </html>
  )
}

export default RootLayout
