import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next/types'
import { StyledSideBarNavMenuItem } from './styled'

interface SideBarNavItemTypes {
  href: string
  variant: string
  title: string
  icon: string
}

/**
 * @todo
 * 여기도 HeaderNavItem과 마찬가지.
 */

const SideBarNavItem = ({
  href,
  variant,
  title,
  icon,
}: SideBarNavItemTypes) => {
  if (variant === 'menu') {
    return (
      <Link href={href}>
        <StyledSideBarNavMenuItem>{title}</StyledSideBarNavMenuItem>
      </Link>
    )
  }

  if (variant === 'link') {
    return (
      <Link href={href} aria-label={title} target="_blank" rel="noopener">
        <Image src={icon} alt="" />
      </Link>
    )
  }
}

export default SideBarNavItem
