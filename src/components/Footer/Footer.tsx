import { FooterStyled } from './Footer.styled'

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="inner">
        <address>
          <span className="logo">Wallywood</span>
          Øster Uttrupvej 1<br />
          9000 Aalborg
        </address>

        <address>
          CVR: 12345678<br />
          MAIL: <a href="mailto:info@wallywood.dk">info@wallywood.dk</a><br />
          MOBIL: <a href="tel:+4598123456">+45 9812 3456</a>
        </address>
      </div>
    </FooterStyled>
  )
}
