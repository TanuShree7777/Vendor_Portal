import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Container>
        <Outlet>dfh</Outlet>
      </Container>
    </>
  );
};

export default MainLayout;
