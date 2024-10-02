import { Container, Row, Col } from 'react-bootstrap'
import builtImg from '../../assets/img/built-img.png';
import icon_1 from '../../assets/img/built-icon-1.png';
import icon_2 from '../../assets/img/built-icon-2.png';
import arrow from '../../assets/img/arrow-icon.png';

type BuiltData = {
  icon: string; // For images, using `string` is more appropriate
  title: string;
  des: string;
  btn_text: string;
};

export default function Built() {
  const built: BuiltData[] = [
    {
      icon: icon_1,
      title: "OP_NET",
      des: 'OP_NET is the first "smart" metaprotocol built directly on Bitcoin, allowing for EVM functionality directly on Bitcoin. There is no bridging or permissioned systems in OP_NET, allowing for true DeFi applications to exist on Bitcoin.',
      btn_text: "Learn more about OP_NET"
    },
    {
      icon: icon_2,
      title: "OP_20",
      des: "OP_20 is the token standard on OP_NET that the STASH protocol uses for both STASH and USDs. It is identical to ERgit pushC-20 on Ethereum and functionally acts the same, allowing for Stash to offer users a familiar DeFi experience on Bitcoin.",
      btn_text: "Learn more about OP_20"
    },
  ];
  return (
    <div className='built'>
      <Container>
        <Row>
          <Col xs="12">
            <div className="built-title d-flex justify-content-between">
              <span>BITCOIN</span>
              <div className="text d-flex align-items-end">
                <div className="inner">
                  <h3>BUILT ON OP_NET</h3>
                  <p>The Stash Protocol is the first stablecoin built on the OP_NET metaprotocol</p>
                </div>
                <div className="icon">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" className='d-flex justify-content-center'>
            <div className="built-wrap d-flex align-items-center">
              <div className="built-img">
                <img src={builtImg} alt="" />
              </div>
              <div className="built-content">
                {built.map((item, index) => (
                  <div className="built-content-item d-flex" key={index}>
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="text">
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                      <button className='btn'>{item.btn_text}</button>
                    </div>
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