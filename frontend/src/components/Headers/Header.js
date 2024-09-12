

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Gtech from '../../assets/img/brand/argon-react.png'
import Esti from '../../assets/img/brand/esti.png'
import Mlay from '../../assets/img/brand/mlay.png'
import G from '../../assets/img/brand/g.png'

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <img src={Gtech} width="90%" height="110px"  ></img>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <img src={Esti} width="90%"  height="110px"></img>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <img src={Mlay} width="100%"  height="110px"></img>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                  <img src={G} width="90%"  height="110px"></img>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
