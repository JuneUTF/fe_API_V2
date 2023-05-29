
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
function InfoUser() {
    const [controller, dispatch] = useMaterialUIController();
    const { sidenavColor} = controller;
    const { id } = useParams();
    
  return (
    <DashboardLayout>
      <DashboardNavbar/>
        <MDTypography variant="div">
      {/* <MDBox color = ""> */}
      {id}
      {/* </MDBox> */}

      {/* ↓↓↓　HTML JSX ここまで　↑↑↑ */}
      </MDTypography>
      <Footer />
    </DashboardLayout>
  );
}

export default InfoUser;
