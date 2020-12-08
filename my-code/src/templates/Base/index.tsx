import { Container } from 'components/Container'
import Navbar from 'components/Navbar'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <Container>
    <Navbar />
    {children}
  </Container>
)

export default Base
