import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUsers, FaUserTimes } from 'react-icons/fa';

const VendorStatics = () => {
    return (
            <Container className="vendor-stats-container">
                <p className="title">Vendor Statistics</p>
                <Row>
                    <Col className="total-vendor">
                        <div className="vendor-stats-icon d-flex">
                            <FaUsers className="totalvendor-icon-background" size={40} fill="#649FD3" />
                            <div className="vender-stats-text d-flex">
                                <h5>25</h5>
                                <p>Total Vendors</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="active-vendor">
                        <div className="vendor-stats-icon d-flex">
                            <FaUsers className="activevendor-icon-background" size={40} fill="#38AB1B" />
                            <div className="vender-stats-text d-flex">
                                <h5>20</h5>
                                <p>Active Vendors</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="inactive-vendor" >
                        <div className="vendor-stats-icon d-flex">
                            <FaUserTimes className="inactivevendor-icon-background" size={40} fill="#C32A2A" />
                            <div className="vender-stats-text d-flex">
                                <h5>5</h5>
                                <p>In-Active Vendors</p></div>
                        </div>
                    </Col>
                </Row>
            </Container>

    )

}

export default VendorStatics;