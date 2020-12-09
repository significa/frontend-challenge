import * as S from './styles'

const NotFound = () => (
  <S.Wrapper>
    <img alt="Movie not found" src="/img/not-found.jpg" />
    <S.Description>Movie not found :(</S.Description>
    <S.Info>Try to search for another movie!</S.Info>
  </S.Wrapper>
)

export default NotFound
