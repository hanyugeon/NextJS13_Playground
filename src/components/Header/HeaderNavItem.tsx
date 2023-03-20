import Image from 'next/image'
import Link from 'next/link'
import { StyledHeaderNavMenuItem } from './styled'

interface HeaderNavItemTypes {
  href: string
  variant: string
  title: string
  icon: string
}

const HeaderNavItem = ({ href, variant, title, icon }: HeaderNavItemTypes) => {
  if (variant === 'menu') {
    return (
      <Link href={href}>
        <StyledHeaderNavMenuItem>{title}</StyledHeaderNavMenuItem>
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

export default HeaderNavItem
