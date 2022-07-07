// @styled-icons/bootstrap/InfoCircle
import * as S from './styles'
type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}
import Link from 'next/link'

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

export default LinkWrapper
