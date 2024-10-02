import { Container, Row, Col } from 'react-bootstrap'
import icon from '../../assets/img/arrow-icon.png'
export default function Price() {
  const card = [
    {
      title: 'STASH Price',
      price: 3.421,
    },
    {
      title: 'USDs Price',
      price: 1.001,
    },
  ]
  return (
    <div className='price'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg="12" xxl="10">
            <div className="price-wrap">
              {card.map((item, index) => (
                <div className="price-item" key={index}>
                  <div className="inner d-flex justify-content-between">
                    <div className="text">
                      <p>{item.title}</p>
                      <span>${item.price}</span>
                    </div>
                    <div className="icon">
                      <img src={icon} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}