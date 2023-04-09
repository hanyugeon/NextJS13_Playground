import Image from 'next/image'
import Link from 'next/link'

interface NavLinkItemTypes {
  title: string
  href: string
  icon: string
}

const NavLinkItem = ({ title, href, icon }: NavLinkItemTypes) => {
  return (
    <a href={href} aria-label={title} target="_blank" rel="noreferrer">
      <Image width={30} height={30} src={icon} alt={title} />
    </a>
  )
}

export default NavLinkItem
