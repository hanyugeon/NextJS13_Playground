import Link from 'next/link'

interface NavRouteItemTypes {
  href: string
  title: string
}

const NavRouteItem = ({ href, title }: NavRouteItemTypes) => {
  return (
    <Link href={href} title={title}>
      {title}
    </Link>
  )
}

export default NavRouteItem
