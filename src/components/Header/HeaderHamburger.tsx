'use client'

import { icHamburger } from '@/assets/icons'
import Image from 'next/image'
import { NextPage } from 'next/types'
import { StyledHeaderHamburger } from './styled'

const HeaderHamburger: NextPage = () => {
  return (
    <StyledHeaderHamburger>
      <Image src={icHamburger} alt="" />
    </StyledHeaderHamburger>
  )
}

export default HeaderHamburger
