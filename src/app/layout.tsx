import { notoSansKrFont } from '@/app/fonts'
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
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
