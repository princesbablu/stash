import { Container, Row, Col } from 'react-bootstrap'
import img from '../../assets/img/banner-img.png'
import arrow from '../../assets/img/arrow-icon.png'

export default function Cta() {
  return (
    <div className='cta'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="cta-wrapper">
              <div className="cta-wrap d-flex justify-content-between align-items-center">
                <div className="cta-wrap-content">
                  <h3>CHECK OUT OUR APP</h3>
                  <a href="#" className="cta-btn"> <span>Launch App</span> <div className="icon"> <img src={arrow} alt="" /> </div></a>
                </div>
                <div className="cta-wrap-img">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}