import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VendorStatics = () => {
    return (
        <Container className="m-5" >
            <Row>           
                    <Col className="total-vendor">1 of 3</Col>
                    <Col className="active-vendor">2 of 3</Col>
                    <Col className="inactive-vendor" >3 of 3</Col>
            </Row>
        </Container>
    )

}

export default VendorStatics;