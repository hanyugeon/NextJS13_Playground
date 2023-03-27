import Image from 'next/image'
import Link from 'next/link'

interface NavLinkItemTypes {
  title: string
  href: string
  icon: string
}

const NavLinkItem = ({ title, href, icon }: NavLinkItemTypes) => {
  return (
    <Link
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image width={30} height={30} src={icon} alt={title} />
    </Link>
  )
}

export default NavLinkItem
