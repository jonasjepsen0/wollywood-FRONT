import { Link, NavLink } from 'react-router-dom'
import cartIcon from '../../assets/svg/icon_cart.svg'
import { HeaderStyled } from './Header.styled'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="inner">
        <Link to="/" className="logo">Wallywood</Link>

        <nav>
          <NavLink to="/" end>Forside</NavLink>
          <NavLink to="/plakater">Plakater</NavLink>
          <a href="#">Om os</a>
          <a href="#">Kontakt os</a>
          <a href="#">Login</a>

          <Link to="/kurv" className="kurv">
            <img src={cartIcon} alt="Indkøbskurv" />
          </Link>
        </nav>
      </div>
    </HeaderStyled>
  )
}
