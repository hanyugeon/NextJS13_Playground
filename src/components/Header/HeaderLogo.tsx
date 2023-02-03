'use client'

import { icLogo } from '@/assets/icons'
import Image from 'next/image'
import { NextPage } from 'next/types'
import { StyledHeaderLogo } from './styled'

const HeaderLogo: NextPage = () => {
  return (
    <StyledHeaderLogo>
      <Image src={icLogo} alt="" priority={true} />
    </StyledHeaderLogo>
  )
}

export default HeaderLogo
