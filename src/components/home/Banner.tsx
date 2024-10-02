import { Container, Row, Col } from 'react-bootstrap'
import img from '../../assets/img/banner-img.png'

export default function Banner() {
  return (
    <div className='banner'>
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col xs="12"  md="7" lg="7" xl="6">
            <div className="banner-content text-center text-md-start">
              <h1>Permission-less Lending on Bitcoin</h1>
              <p>Borrow USDs Against Bitcoin* with STASH Protocol: Secure, Immutable, and Permission-less.</p>
            </div>
          </Col>
          <Col xs="11" md="5" lg="5" xl="6">
            <div className="banner-img d-flex justify-content-center">
              <img src={img} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}