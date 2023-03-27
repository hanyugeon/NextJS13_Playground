import { icLogo } from '@/assets/icons'
import Image from 'next/image'
import Link from 'next/link'
import { StyledHeaderLogo } from './styled'

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Link href="/">
        <Image width={244} height={90} src={icLogo} alt="" priority={true} />
      </Link>
    </StyledHeaderLogo>
  )
}

export default HeaderLogo
