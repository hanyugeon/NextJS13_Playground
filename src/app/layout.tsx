import GlobalStyle from '@/styles/GlobalStyle'
import { NextPage } from 'next/types'
import { notoSansKrFont } from './fonts'

interface Props {
  children: React.ReactNode
}

const RootLayout: NextPage<Props> = (Props) => {
  return (
    <html>
      <GlobalStyle />
      <head className={`${notoSansKrFont.className}`} />
      <body className={`${notoSansKrFont.className}`}>{Props.children}</body>
    </html>
  )
}

export default RootLayout
