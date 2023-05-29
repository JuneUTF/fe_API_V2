
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import { useMaterialUIController } from "context";
import 'bootstrap/dist/css/bootstrap.min.css';
function ListUser() {
    const [controller, dispatch] = useMaterialUIController();
const {
  sidenavColor,
} = controller;
    
  return (
    <DashboardLayout>
      <DashboardNavbar/>
        <MDTypography variant="div">
      {/* <MDBox color = ""> */}
      ListUser
      {/* </MDBox> */}

      {/* ↓↓↓　HTML JSX ここまで　↑↑↑ */}
      </MDTypography>
      <Footer />
    </DashboardLayout>
  );
}

export default ListUser;
