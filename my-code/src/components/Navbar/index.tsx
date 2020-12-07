import Link from 'next/link'

import Logo from 'components/Logo'

import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Link href="/" passHref>
        <a>
          <Logo />
        </a>
      </Link>
    </S.LogoWrapper>
  </S.Wrapper>
)

export default Navbar
