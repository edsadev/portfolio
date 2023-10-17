import { Outlet } from "react-router-dom";
import CustomNav from "../components/CustomNav"
import Footer from "../components/CustomFooter"

const MainLayout = () => {
  return (
    <div>
      <CustomNav />
      <Outlet />
      <Footer />
    </div>

  )
}

export default MainLayout
