
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from "layouts/AdminRole/Home/Person";
import Classify from "layouts/AdminRole/Home/Classify";
import { Col, Container, Row } from "react-bootstrap";
function HomeAdmin() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDTypography variant="div">
        <Container>
          <Row className=" d-flex justify-content-center align-items-center">
            <Col lg={6} md={8} xs={12}>
              <Person/>
            </Col>
            {/* <Col lg={1} md={0} xs={0}></Col> */}
          <Col lg={6} md={8} xs={12}>
              <Classify/>
            </Col>
            </Row>
        </Container>
      </MDTypography>
      <Footer />
    </DashboardLayout>
  );
}

export default HomeAdmin;
