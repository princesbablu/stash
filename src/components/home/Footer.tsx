import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import styleImg1 from '../../assets/img/footer-style-1.png'
import styleImg2 from '../../assets/img/footer-style-2.png'
import styleImg3 from '../../assets/img/footer-style-3.png'
import Social from './Social.tsx'

export default function Footer() {
  const menu = [
    {
      title: 'Menu',
      link: [
        {
          text: 'Home',
        },
        {
          text: 'Docs',
        },
        {
          text: 'GitHub',
        },
        {
          text: 'Analytics',
        },
      ]
    },
    {
      title: 'Privacy policy',
      link: [
        {
          text: 'Privacy policy',
        },
        {
          text: 'Terms of Use',
        },
      ]
    },
  ]
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="footer-wrap d-flex justify-content-between align-items-start">
              <div className="content">
                <div className="logo"><img src={logo} alt="" /></div>
                <p>© ALL RIGHTS RESERVED, STASH 2024 </p>
              </div>
              <Social />
              <div className="menu d-flex ">
                {menu.map((item, index) => (
                  <div className="menu-single" key={index}>
                    <h6>{item.title} </h6>
                    {item.link.map((item, index) => (
                      <a href="#" key={index}>{item.text} </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={styleImg1} alt="" className="style style-1" />
      <img src={styleImg2} alt="" className="style style-2" />
      <img src={styleImg3} alt="" className="style style-3" />
    </div>
  )
}