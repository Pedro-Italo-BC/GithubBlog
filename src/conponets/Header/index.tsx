import { HeaderContainer } from './styles'
import Logo from '../../assets/headerimgs/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
    </HeaderContainer>
  )
}
