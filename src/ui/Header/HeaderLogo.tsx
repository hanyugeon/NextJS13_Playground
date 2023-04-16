import { icLogo } from '@/assets/icons'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

const HeaderLogo = () => {
  return (
    <S.HeaderLogo>
      <Link href="/" aria-label={'MainLogo'}>
        <Image width={244} height={90} src={icLogo} alt="" priority={true} />
      </Link>
    </S.HeaderLogo>
  )
}

export default HeaderLogo
