import { Template, RecoilRoot } from '@/components'
import { fontNotoSans } from '@/styles/fonts'
import GlobalStyle from '@/styles/GlobalStyle'

type ChildrenType = {
  children: React.ReactNode
}

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="ko-KR" className={`${fontNotoSans.className}`}>
      <GlobalStyle />
      <head />
      <body>
        <RecoilRoot>
          <Template>{children}</Template>
        </RecoilRoot>
      </body>
    </html>
  )
}
