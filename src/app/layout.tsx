import GlobalStyle from '@/styles/GlobalStyle'
import { NextPage } from 'next/types'
import { notoSansKrFont } from './fonts'

interface PropTpyes {
  children: React.ReactNode
}

const RootLayout: NextPage<PropTpyes> = ({ children }) => {
  return (
    <html>
      <GlobalStyle />
      <head className={`${notoSansKrFont.className}`} />
      <body className={`${notoSansKrFont.className}`}>{children}</body>
    </html>
  )
}

export default RootLayout
