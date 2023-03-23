import Link from 'next/link'

interface SideBarMenuItemTypes {
  href: string
  title: string
}

const SideBarMenuItem = ({ href, title }: SideBarMenuItemTypes) => {
  return (
    <Link href={href} title={title}>
      {title}
    </Link>
  )
}

export default SideBarMenuItem
