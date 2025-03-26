import {
  Container,
  SectionLogo,
  FooterSection,
  Link,
  Links,
  Paragrafo
} from './styles'
import logo from '../../assets/images/logofood.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1@2x.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionLogo>
          <img src={logo} alt="eplay" />
        </SectionLogo>
        <Links>
          <li>
            <Link>
              <img className="imgLink" src={instagram} alt="eplay" />
            </Link>
          </li>
          <li>
            <Link>
              <img className="imgLink" src={facebook} alt="eplay" />
            </Link>
          </li>
          <li>
            <Link>
              <img className="imgLink" src={twitter} alt="eplay" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <Paragrafo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Paragrafo>
    </div>
  </Container>
)

export default Footer
