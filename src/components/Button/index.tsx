import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  className
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        className={className}
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink className={className} to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
