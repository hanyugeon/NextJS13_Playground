import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next/types'
import { StyledSideBarNavMenuItem } from './styled'

interface PropTypes {
  href: string
  variant: string
  title: string
  icon: string
}

const SideBarNavItem: NextPage<PropTypes> = (props) => {
  if (props.variant === 'menu') {
    return (
      <Link href={props.href}>
        <StyledSideBarNavMenuItem>{props.title}</StyledSideBarNavMenuItem>
      </Link>
    )
  }

  if (props.variant === 'link') {
    return (
      <Link
        href={props.href}
        aria-label={props.title}
        target="_blank"
        rel="noopener"
      >
        <Image src={props.icon} alt="" />
      </Link>
    )
  }
}

export default SideBarNavItem
