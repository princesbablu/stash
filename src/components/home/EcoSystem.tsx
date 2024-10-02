import { Container, Row, Col } from 'react-bootstrap';
import icon_1 from '../../assets/img/eco-icon.png';
import icon_2 from '../../assets/img/eco-icon-2.png';

type EcoData = {
  icon: string; // For images, using `string` is more appropriate
  title: string;
  des: string;
  btn_text: string;
};

export default function EcoSystem() {
  const eco: EcoData[] = [
    {
      icon: icon_1,
      title: "STASH",
      des: "STASH is the governance token of the STASH protocol. Lock STASH into veSTASH to control gauge emissions or stake STASH to earn passive yield. ",
      btn_text: "Explore STASH"
    },
    {
      icon: icon_2,
      title: "USDs",
      des: "USDs is STASH’s stablecoin, a collateralized debt position pegged to the US dollar, enabling stable transactions and yield opportunities directly on Bitcoin.",
      btn_text: "Explore USDs"
    }
  ];

  return (
    <div className='eco'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="eco-title text-center">
              <h2>STASH ECOSYSTEM</h2>
              <p>The STASH Protocol Currently has 2 Tokens.</p>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xs="12" xl="10" className='d-flex justify-content-center'>
            <div className="eco-wrap d-flex">
              {eco.map((item, index) => (
                <div className='eco-item' key={index}>
                  <div className="eco-item-inner">
                    <img src={item.icon} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                    <button className='btn'>{item.btn_text}</button>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
