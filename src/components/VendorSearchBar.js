import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AiOutlineSearch} from "react-icons/ai"

export const VendorSearchBar = () => {

  const clickMe=()=>{}
  return (
    <>
      <Container>
        <div className="searchVen">
          <Row>
            <Col md={6}>
              <div className="searchForm">
                <h3>Vendor Search</h3>

               <div className="searchbarIcon">
               <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
            <AiOutlineSearch size={40} onClick={clickMe}/>
               </div>

              </div>
              {/* <DiReact className="icon" /> */}
            </Col>
          </Row>
        </div>

      </Container>
    </>
  );
};
