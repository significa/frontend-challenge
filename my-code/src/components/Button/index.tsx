import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  icon?: React.ReactNode
  favourite: boolean
} & ButtonTypes

const Button = ({ children, icon, favourite, ...props }: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} {...props} favourite={favourite}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
