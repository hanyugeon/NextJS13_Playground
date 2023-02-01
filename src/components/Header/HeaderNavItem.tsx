'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next/types'
import { StyledHeaderNavMenuItem } from './styled'

interface PropTypes {
  href: string
  variant: string
  title: string
  icon: string
}

const HeaderNavItem: NextPage<PropTypes> = (props) => {
  if (props.variant === 'menu') {
    return (
      <Link href={props.href}>
        <StyledHeaderNavMenuItem>{props.title}</StyledHeaderNavMenuItem>
      </Link>
    )
  }

  if (props.variant === 'link') {
    return (
      <Link href={props.href} target="_blank" rel="noopener">
        <Image src={props.icon} alt="" />
      </Link>
    )
  }
}

export default HeaderNavItem
