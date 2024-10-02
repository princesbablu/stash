import { Container, Row, Col } from 'react-bootstrap'
import icon1 from '../../assets/img/service-icon-1.png'
import icon2 from '../../assets/img/service-icon-2.png'
import icon3 from '../../assets/img/service-icon-3.png'

type serviceData = {
  icon: string,
  title: string;
  des: string;
  btn_text: string;
}

export default function Service() {
  const service: serviceData[] = [
    {
      icon: icon1,
      title: 'Gauge Emissions',
      des: 'STASH employs a gauge system to direct STASH rewards to liquidity pools paired with USDs. Locked STASH tokens, veSTASH, are granted the governance rights to vote on gauge emissions. This allows for USDs to obtain greater liquidity and establish itself as a premier liquidity source for projects building on Bitcoin.',
      btn_text: 'Explore Gauges',
    },
    {
      icon: icon2,
      title: 'Stability Pool',
      des: 'The STASH protocol features a Stability pool allowing users to earn yield on their USDs. Users can deposit their USDs into the Stability pool which are then reserved for participating in liquidation events. This not only secures the protocol, but allows users to earn passive yield on their USDs. ',
      btn_text: 'Explore Pools',
    },
    {
      icon: icon3,
      title: 'Staking',
      des: 'The STASH protocol also gives users an option to earn yield on their STASH tokens without having to lock their STASH. Users can Stake their STASH in order to earn staking rewards in the form of STASH.',
      btn_text: 'Explore Staking',
    },
  ]

  return (
    <div className='service'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="service-title d-flex justify-content-between">
              <p>The STASH protocol has several mechanisms to create a robust and complimentary ecosystem.</p>
              <h2>STASH INFRATRUCTURE</h2>
            </div>
          </Col>
          <Col xs="12">
            <div className="service-wrapper">
              <button id="btn">Gauges, Pools, Staking </button>
              <div className="service-wrap">
                {service.map((item, index) => (
                  <div className="service-item" key={index}>
                    <img src={item.icon} alt="" />
                    <h5>{item.title}</h5>
                    <p>{item.des}</p>
                    <a href="#" className="btn">{item.btn_text}</a>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}