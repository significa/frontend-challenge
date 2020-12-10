import Link from 'next/link'
import * as S from './styles'

const Empty = () => (
  <S.Wrapper>
    <Link href="/movie/[id]" as={'/movie/tt0068646'} passHref>
      <a>
        <img alt="List of movies is empty" src="/img/empty.png" />
        <S.Description>Don’t know what to search?</S.Description>
        <S.Info>Here’s an offer you can’t refuse</S.Info>
      </a>
    </Link>
  </S.Wrapper>
)

export default Empty
